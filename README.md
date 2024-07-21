# Sonics
Sonics is a project where I explore converting data into music. Many of these ideas came from different sources, and I do not claim them as my own, but the execution is mine. 
My goal is to gain experience with various music programming languages and toy around with this unique representation of data.

## Time 

### Details and thoughts 
* General process
  * JS Date Object used for display and for melody/bass line 
  * Melody = ASCII code of Day of Week abbreviation and the time 
  (e.g. Sunday(=S=83) at 15:45:46 -->  83154546)
  * Bass = date (e.g. 01/01/2000 --> 01012000)
  * I then used the below conversions to determine the scale and notes. 
  * The melody updates every 2 seconds. Ideally, it would update every second but I found this tempo to be faster than I wanted (maybe I'll change it).
* This was my first project. I used Tone.js. 
    * I did not find the documentation to be very helpful or accessible for a first-time user. 
    * Selection of instruments was limited. 
    * I would consider using again with React (which I also have no experience with).
* I was inspired by Aiza Lab.

### Conversions
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

