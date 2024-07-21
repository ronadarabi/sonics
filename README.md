# Sonics
Sonics is a project where I explore converting data into music. While many of these ideas came from many sources, and I do not claim them as my own, the execution is uniquely mine. 

### Time 
I used the following chart to convert digits to notes.

| Major Scale  | 0 |  1 |  2 |  3 |  4 |  5 |  6 | 7 | 8 | 9 |
| ----------- | ---- |---- |---- |---- |---- |---- |---- |---- |- |-- |
| C  | C | D | E | F | G | A | B | C | D |E |
| D  | D | E | F# | G | A | B | C | D | E | F# |
| E  | E | F# | G# | A | B | C# | D | E | F# | G# |
| F  | F | G | A | Bb | C | D | E | F | G | A | 
| G  | G | A | B | C | D | E | F# | G | A | B |
| A  | A | B | C# | D | E | F# | G# | A | B | C# |
| B  | B | C# | D# | E | F# | G# | A# | B | C# | D# |

The day of the week determines which scale to play: 
| Day | Scale | 
| --- | ----- | 
| Sun | C | 
| Mon | D | 
| Tues | E | 
| Wed | F | 
| Thurs | G | 
| Fri | A | 
| Sat | B | 

Some details:
* The functionality is coded in Javascript using Tone.js - this project is my first time using the library. 
* The date is fetched using the Date() class in Javascript. It is of a format similar to what is displayed on the live clock on the site.
* I used the date (e.g. 07/20/2024) to create the bass line. 
* For the melody, I used the ASCII code (2-digit) of the first character of the day of the week (e.g Sun=S=83) as well as the time (e.g. 16:45:44) for the melody. 
* The melody updates every 2 seconds. Ideally, it would update every second, but I found this tempo too be too fast. 
* I was inspired by Aiza Lab.