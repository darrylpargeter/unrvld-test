# Intro
A small test application using the [Punk API](https://punkapi.com/)

The App is split over Two Pages.

## Shop Page
implerments a CTA Grid with basic filtering on ABV, name and malts

## All Beer
implerments a according with pagination on it

## Know Issues
- Uneeded white flashs when filtering by name or malts
- a few UI issues on the BeerDisplay comp on smaller screen sizes
- unable load the `/all-beers` route by it self, user must load from `/` then navigate to `/all-beers`


## Build
To run the project all that is need is to do the following
1) `git clone git@github.com:darrylpargeter/unrvld-test.git`
2) `npm i`
3) `npm run start`
4) open a browser at `localhost:8000`
