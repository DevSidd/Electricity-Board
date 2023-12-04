import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { ConnectionApplicationService } from 'src/app/services/connection-application.service';

@Component({
  selector: 'app-application-chart',
  template: '<canvas #chartCanvas></canvas>',
})
export class ApplicationChartComponent {
  @Input() chartData: any[] = [];
  @Input() selectedStatus: string = 'All';

  private chart: Chart | null = null;
  private chartCanvas: HTMLCanvasElement | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] || changes['selectedStatus']) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    if (!this.chartCanvas) {
      return;
    }

    if (this.chart) {
      this.chart.destroy();
    }

    const filteredData = this.filterDataByStatus();
    const months = this.extractMonths(filteredData);
    const counts = this.calculateCounts(filteredData, months);

    this.chart = new Chart(this.chartCanvas.getContext('2d')!, {
      type: 'bar',
      data: {
        labels: months,
        datasets: [
          {
            label: `Connection Requests (${this.selectedStatus})`,
            data: counts,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
    });

    // Add more customization or options as needed
  }

  private filterDataByStatus(): any[] {
    return this.selectedStatus === 'All'
      ? this.chartData
      : this.chartData.filter((item) => item.status === this.selectedStatus);
  }

  private extractMonths(data: any[]): string[] {
    const uniqueMonths = new Set<string>();
    for (const item of data) {
      uniqueMonths.add(item.dateOfApplication.split('-')[1]); // Assuming date format is 'YYYY-MM-DD'
    }
    return Array.from(uniqueMonths.values()).sort();
  }

  private calculateCounts(data: any[], months: string[]): number[] {
    const counts: number[] = [];

    for (const month of months) {
      const count = data.filter((item) => item.dateOfApplication.split('-')[1] === month).length;
      counts.push(count);
    }

    return counts;
  }
}