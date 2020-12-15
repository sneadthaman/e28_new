# Project 2: ForgetMeNot

<<<<<<< HEAD
# An App that reminds users when to shop for gift cards and gifts


## Project setup
```
npm install
```
=======
* By Sam Janvey
* Production URL: http://e28p2.samjanvey.com/
>>>>>>> bca00f8f2469562439bf38653ffc33f92c4bd3a3

## Pages Summary

* Home
* 2021 Holidays
* Add a Holiday

## SFC Summary
Add A Holiday component let's a user add their own special occasion

## Server Interaction
* Get a list of 'Global' holidays from server
* Add a holiday to the list of holidays

## New Features Since Project 2
* Authentication
** User is able to log in and out
** Only logged in users can add a holiday to their list
** Unauthenticated users do not have access to the Add Holiday page

* Validation
** Users are prompted for expected input types for both the registration and add holiday forms

## Features NOT yet working
* Data is not persisting outside of current session
* Remove holiday button not working yet
* Registration not yet adding user to Vuex Store

## Issues during testing
* API calls during 'add holiday' tests were returning 404 on some occassions, but not all. 

## Deployment
Project 3 is being deployed on Netlify and all changes to git are being tracked in real-time for automated updates. Site is also utilizing HTTPS.

## Outside Resources
Although the 'remove' button is not functional yet, I did look at some code from a stack overflow article on how to properly do an axios.delete action
https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers
