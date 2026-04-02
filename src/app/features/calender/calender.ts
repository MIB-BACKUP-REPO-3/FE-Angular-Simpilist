import { Component, signal, computed } from '@angular/core';
@Component({
  selector: 'app-calender',
  imports: [],
  templateUrl: './calender.html',
  styleUrl: './calender.css',
})
export class Calender {
  calenderDays = signal<(null | number)[]>([]);
  today = signal<Date>(new Date());
  selectedMonth = signal<Date>(this.getFirstDayOfCurrentMonth());
  // create this cached obj to avoid double running
  monthString = signal<string>('');
  totalDays = computed(() => {
    return this.getTotalDaysForMonth(this.getMonth(), this.getMonthYear());
  });

  getFirstDayOfCurrentMonth(): Date {
    let today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  }
  
  getMonth(): number {
    return this.selectedMonth().getMonth();
  }

  getFirstMonthDay(): number {
    return this.selectedMonth().getDay();
  }

  getMonthYear(): number {
    return this.selectedMonth().getFullYear();
  }

  getTotalDaysForMonth(month: number, year: number): number {
    //suppose we be starting from 0 then we will have 0-11 then
    if (month === 1) {
      // this is for feburary
      if (year % 100 === 0) {
        return year % 400 === 0 ? 29 : 28;
      }
      return year % 4 === 0 ? 29 : 28;
    }
    if (month <= 6) {
      return this.returnDayResult(month % 2 === 1);
    } else {
      return this.returnDayResult(month % 2 === 0);
    }
  }

  returnDayResult(dayMod: boolean): 30 | 31 {
    return dayMod ? 30 : 31;
  }

  getDateString(): string {
    //apparently there exists some sorta timezone issue if this.date().toISOString used so we workaround
    let date = this.selectedMonth().toLocaleString().split(',')[0].split('/');
    let day = String(date[0]).padStart(2, '0');
    let month = String(date[1]).padStart(2, '0');
    let year = String(date[2]);
    return `${year}-${day}-${month}`;
  }

  getMonthString(): string {
    let date = this.selectedMonth().toLocaleString().split(',')[0].split('/');
    let month = String(date[1]).padStart(2, '0');
    let year = String(date[2]);
    return `${year}-${month}`;
  }

  ngOnInit() {
    this.monthString.set(this.getMonthString());
    this.populateDays();
  }

  populateDays() {
    let nullPad: null[] = Array(this.getFirstMonthDay()).fill(null);

    let days: number[] = [...Array(this.totalDays()).keys()].map((x) => x + 1);
    this.calenderDays.set([...nullPad, ...days]);
  }

  onChange(event: Event) {
    let input = event.target as HTMLInputElement;
    let inputDate = input.value.split('-');
    let newDate = new Date(Number(inputDate[0]), Number(inputDate[1]) - 1, 1);
    this.selectedMonth.set(newDate);
    this.populateDays();
  }

  getWeeks() {
    let weeks: (number | null)[][] = [];
    let week: (number | null)[] = [];
    let days = this.calenderDays();
    for (let i = 0; i < days.length; i++) {
      week.push(days[i]);
      if ((i + 1) % 7 === 0) {
        weeks.push(week);
        week = [];
      }
    }
    if (week.length !== 0) {
      weeks.push(week);
    }
    return weeks;
  }
}
