import { Component, signal, computed } from '@angular/core';
@Component({
  selector: 'app-calender',
  imports: [],
  templateUrl: './calender.html',
  styleUrl: './calender.css',
})
export class Calender {
  days = signal<number[]>([]);
  date = signal<Date>(new Date());
  //create this cached obj to avoid double running
  dateString = signal<string>('');
  totalDays = computed(() => {
    return this.getTotalDaysForMonth(this.getCurrentMonth(), this.getCurrentYear());
  });

  getCurrentMonth(): number {
    return this.date().getMonth();
  }

  getCurrentDay(): number {
    return this.date().getDay();
  }

  getCurrentDate(): number {
    return this.date().getDate();
  }

  getCurrentYear(): number {
    return this.date().getFullYear();
  }

  getTotalDaysForMonth(month: number, year: number): number {
    //suppose we be starting from 0 then we will have 0-11 then
    console.log("passed month and year", month+" "+year)
    if (month !== 1) {
      // this not for feburary
      if (month === 0) {
        return this.returnDayResult(true);
      } else {
        return this.returnDayResult(month % 2 === 1);
      }
    } else {
      // this is for feburary
      year % 4 === 0 ? 28 : 29;
    }
    return this.date().getDay();
  }

  returnDayResult(dayMod: boolean): 30 | 31 {
    return dayMod ? 30 : 31;
  }

  getDateString(): string {
    //apparently there exists some sorta timezone issue if this.date().toISOString used so we workaround
    let date = this.date().toLocaleString().split(',')[0].split('/');
    let day = String(date[0]).padStart(2, '0');
    let month = String(date[1]).padStart(2, '0');
    let year = String(date[2]);
    return `${year}-${day}-${month}`;
  }

  ngOnInit() {
    this.dateString.set(this.getDateString());
    console.log(
      this.totalDays(),
      'is the total days for selected month',
      this.date().toDateString().split(' ')[1],
    );
  }

  onChange(event: Event) {
    let input = event.target as HTMLInputElement;
    let newDate = new Date(input.value);
    console.log('setting new date ', newDate);
    this.date.set(newDate);
    console.log(
      this.totalDays(),
      'is the  total days for selected month',
      this.date().toDateString().split(' ')[1],
    );
  }
}
