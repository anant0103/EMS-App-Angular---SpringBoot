import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Attendance } from 'src/app/Models/attendance';
import { AttendanceService } from 'src/app/Services/APIService/attendance.service';
import { TokenService } from 'src/app/Services/AuthService/token.service';

@Component({
  selector: 'app-attendance-graph',
  templateUrl: './attendance-graph.component.html',
  styleUrls: ['./attendance-graph.component.css']
})
export class AttendanceGraphComponent implements OnInit, OnChanges {

  @Input() id: number;
  month: number;
  attendances: Attendance[];
  datapoints: any[] =[];
  chartLoaded = false;

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.month = new Date().getMonth();
    this.getAttendance();
    this.attendanceService.attendanceAdded.subscribe(() => this.getAttendance());
  }

  ngOnChanges() : void {
    this.ngOnInit();
  }

  getAttendance() {
    this.chartLoaded = false;
    this.attendanceService.getAttendanceforUserByMonth(this.id, this.month + 1).subscribe((data) => {
      this.attendances = data;
      this.datapoints.length = 0;

      const now = new Date();
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
      const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

      for (let d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
        let obj = this.attendances.filter(o =>
          d.getDate() === (new Date(o.date)).getDate()
        );
        if (obj.length == 2) {
          let avgTime = this.calculateAvgTime(obj);
          let ob = { label: obj[0].date, y: avgTime };
          this.datapoints.push(ob);
        }
      }
      this.chartLoaded = true;
    })
  }

  calculateAvgTime(obj: Attendance[]) {
    let intime = obj[0].intime ? obj[0].intime : obj[1].intime;
    let outtime = obj[0].outtime ? obj[0].outtime : obj[1].outtime;
    let [h1, m1, s1] = intime.split(":").map(str => Number(str));
    let [h2, m2, s2] = outtime.split(":").map(str => Number(str));
    let t1 = s1 + (m1 * 60) + (h1 * 3600);
    let t2 = s2 + (m2 * 60) + (h2 * 3600);
    let avg = ((t2 - t1) / 3600).toFixed(1);
    return Number(avg);
  }

  chartOptions = {
    title: {
      text: "Attendance For Month"
    },
    animationEnabled: true,
    axisX: {
      title: "Date",
    },
    axisY: {
      title: "Average Hours",
      includeZero: true,
    },
    data: [{
      type: "column", //change type to bar, line, area, pie, etc
      //indexLabel: "{y}", //Shows y value on all Data Points
      indexLabelFontColor: "#5A5757",
      dataPoints: this.datapoints,
    }]
  }

}
