import { Component } from '@angular/core';
import { TopCompanies } from '../../components/top-companies/top-companies';
import { Categories } from '../../components/categories/categories';
import { FeaturedJobs } from '../../components/featured-jobs/featured-jobs';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  imports: [Hero,
    FeaturedJobs,
    Categories,
    TopCompanies],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
