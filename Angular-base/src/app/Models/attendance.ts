export class Attendance {
    id: number;
    date: Date;
    intime: string;
    outtime: string;
    userid: number;
}

export class AttendanceIn {
    date: Date;
    intime: Date;
    userid: number;

    constructor(date,intime,userid) {
        this.date=date;
        this.intime=intime;
        this.userid=userid;
    }
}

export class AttendanceOut {
    date: Date;
    outtime: Date;
    userid: number;

    constructor(date,outtime,userid) {
        this.date=date;
        this.outtime=outtime;
        this.userid=userid;
    }
}


