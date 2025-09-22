import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.css']
})
export class Calendar implements OnInit {
  currentDate = new Date();
  currentMonth = this.currentDate.getMonth();
  currentYear = this.currentDate.getFullYear();
  activeDay: string | null = null;

  eventos: Record<string, string> = {
    '2025-07-08': 'Simulacro de sismo nacional.',
    '2025-07-19': 'Entrega de informe bimestral.',
    '2025-07-25': 'Inicio de vacaciones escolares.'
  };

  monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  calendarDays: { day?: number, fullDate?: string, hasEvent?: boolean }[] = [];

  ngOnInit(): void {
    this.renderCalendar();
  }

  renderCalendar() {
    this.calendarDays = [];
    const firstDay = (new Date(this.currentYear, this.currentMonth, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      this.calendarDays.push({});
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const fullDate = `${this.currentYear}-${String(this.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      this.calendarDays.push({
        day,
        fullDate,
        hasEvent: !!this.eventos[fullDate]
      });
    }
  }

  mostrarEvento(fecha: string) {
    if (this.activeDay === fecha) {
      this.activeDay = null;
    } else {
      this.activeDay = fecha;
    }
  }

  prevMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.renderCalendar();
  }

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.renderCalendar();
  }

  changeYear(year: number) {
    this.currentYear = year;
    this.renderCalendar();
  }

  get years() {
    return Array.from({ length: 4 }, (_, i) => 2023 + i);
  }
  
}