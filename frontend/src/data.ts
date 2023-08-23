import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
    {
        id: '1',
        price: 11,
        name: 'Schiebeat',
        favorite: false,
        origins: ['Idlep', 'Aleppo'],
        stars: 3.9,
        imageUrl: 'assets/1.png',
        cookTime: [],
        tags: ['Schiebeat']
    },
    {
        id: '2',
        price: 17,
        name: 'Esmalyeh',
        favorite: false,
        origins: ['Idlep', 'Aleppo'],
        stars: 3.7,
        imageUrl: 'assets/1.png',
        cookTime: [],
        tags: ['Esmalyeh']
    },
    {
        id: '3',
        price: 16,
        name: 'Iswaret Alset',
        favorite: true,
        origins: ['Idlep', 'Aleppo'],
        stars: 5.0,
        imageUrl: 'assets/1.png',
        cookTime: [],
        tags: ['Iswaret Alset']
    },
    {
        id: '4',
        price: 30,
        name: 'Knafe',
        favorite: false,
        origins: ['Idlep', 'Aleppo'],
        stars: 3.5,
        imageUrl: 'assets/1.png',
        cookTime: [],
        tags: ['Knafe']
    },
    {
        id: '5',
        price: 25,
        name: 'Baklava',
        favorite: true,
        origins: ['Idlep', 'Aleppo'],
        stars: 4.0,
        imageUrl: 'assets/1.png',
        cookTime: [],
        tags: ['Baklava']
    },
    {
        id: '6',
        price: 15,
        name: 'Souara',
        favorite: true,
        origins: ['Idlep', 'Aleppo'],
        stars: 4.0,
        imageUrl: 'assets/1.png',
        cookTime: [],
        tags: ['Souara']
    }
]

export const sample_tags:Tag[] = [
    { name: 'All', count: 6 },
    { name: 'Schiebeat', count: 2 },
    { name: 'Esmalyeh', count: 3 },
    { name: 'Iswaret Alset', count: 2 },
    { name: 'Knafe', count: 1 },
    { name: 'Baklava', count: 1 },
    { name: 's', count: 1 },
  ]