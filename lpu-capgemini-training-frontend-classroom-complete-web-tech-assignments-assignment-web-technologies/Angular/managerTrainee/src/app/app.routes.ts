import { Routes } from '@angular/router';
import { AddTraining } from './components/add-training/add-training';
import { TrainiList } from './components/traini-list/traini-list';

export const routes: Routes = [
    {
        path : '/add',
        component :AddTraining,
        title : 'adding paige',
    },
    {
        path : '/list',
        component :TrainiList,
        title : 'List Paige',
    },
    { path: '', redirectTo: 'trainings', pathMatch: 'full' }
];
