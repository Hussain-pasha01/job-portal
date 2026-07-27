import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedJobService {

  private STORAGE_KEY = 'saved_jobs';

  savedJobIds = signal<number[]>(this.loadSavedJobs());

  private loadSavedJobs(): number[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private save(ids: number[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(ids));
    this.savedJobIds.set(ids);
  }

  isSaved(jobId: number): boolean {
    return this.savedJobIds().includes(jobId);
  }

  saveJob(jobId: number) {
    if (!this.isSaved(jobId)) {
      this.save([...this.savedJobIds(), jobId]);
    }
  }

  removeJob(jobId: number) {
    this.save(
      this.savedJobIds().filter(id => id !== jobId)
    );
  }

  toggle(jobId: number) {
    this.isSaved(jobId)
      ? this.removeJob(jobId)
      : this.saveJob(jobId);
  }

}