![Diverge](https://raw.githubusercontent.com/curlygirltech/Discographi/main/Diverge.png)


## Project Description
helping therapists enable behavior change for clients on the autism spectrum

## API and Data Sample
```json
{
    "artists": [
        {
            "idArtist": "111239",
            "strArtist": "Coldplay",
            "strArtistStripped": null,
            "strArtistAlternate": "",
            "strLabel": "Parlophone",
            "idLabel": "45114",
            "intFormedYear": "1996",
            "intBornYear": "1996",
            "intDiedYear": null,
            "strDisbanded": null,
            "strStyle": "Rock/Pop",
            "strGenre": "Alternative Rock",
            "strMood": "Happy",
            "strWebsite": "www.coldplay.com",
            "strFacebook": "www.facebook.com/coldplay",
            "strTwitter": "www.twitter.com/coldplay",
            "strBiographyEN": "Coldplay are a British alternative rock band formed in 1996 by lead vocalist Chris Martin and lead guitarist Jonny Buckland at University College London. After they formed Pectoralz, Guy Berryman joined the group as a bassist and they changed their name to Starfish. Will Champion joined as a drummer, backing vocalist, and multi-instrumentalist, completing the line-up. Manager Phil Harvey is often considered an unofficial fifth member. The band renamed themselves \"Coldplay\" in 1998, before recording and releasing three EPs; Safety in 1998, Brothers & Sisters as a single in 1999 and The Blue Room in the same year. The latter was their first release on a major label, after signing to Parlophone.\n\nThey achieved worldwide fame with the release of the single \"Yellow\" in 2000, followed by their debut album released in the same year, Parachutes, which was nominated for the Mercury Prize. The band's second album, A Rush of Blood to the Head (2002), was released to critical acclaim and won multiple awards, including NME's Album of the Year, and has been widely considered the best of the Nelson-produced Coldplay albums. Their next release, X&Y, the best-selling album worldwide in 2005, was met with mostly positive reviews upon its release, though some critics felt that it was inferior to its predecessor. The band's fourth studio album, Viva la Vida or Death and All His Friends (2008), was produced by Brian Eno and released again to largely favourable reviews, earning several Grammy nominations and wins at the 51st Grammy Awards. On 24 October 2011, they released their fifth studio album, Mylo Xyloto, which was met with mixed to positive reviews, and was the UK's best-selling rock album of 2011.\n\nThe band has won a number of music awards throughout their career, including seven Brit Awards winning Best British Group three times, four MTV Video Music Awards, and seven Grammy Awards from twenty nominations. As one of the world's best-selling music artists, Coldplay have sold over 55 million records worldwide. In December 2009, Rolling Stone readers voted the group the fourth best artist of the 2000s.\n\nColdplay have been an active supporter of various social and political causes, such as Oxfam's Make Trade Fair campaign and Amnesty International. The group have also performed at various charity projects such as Band Aid 20, Live 8, Sound Relief, Hope for Haiti Now: A Global Benefit for Earthquake Relief, The Secret Policeman's Ball, and the Teenage Cancer Trust.
```

## Wireframes

https://wireframe.cc/eUWgeK

### MVP/PostMVP

#### MVP 

- render Artist name, image, Website, and social media, to the DOM
- Allow user to search by artist
- Clear old Data on new search input

#### PostMVP  

- Add an animation that will take place when user opens app
- Convert Bio to different languages

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes |Complete
|Feb 23| Project Approval, App Structure and Psuedocode | Complete
|Feb 24|  Attach Api/append to DOM| Complete
|Feb 24| Create Form/Add Flexbox | Complete
|Feb 25|Attach Social Media /Debug| Complete
|Feb 26| Styling the app with advanced CSS and search keyword P-MVP | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

https://wireframe.cc/zPy0pp

## Timeframes

| Component                       | Priority  | Estimated Time  | Time Invested | Actual Time  |
|---------------------------------|-----------|-----------------|---------------|--------------|
| Appending to DOM                | H         | 3               |             6 |              |
| Debugging                       | H         | 3               |             5 |              |
| Attach API request              | H         | 3               |             3 |              |
| Solidify Color themes and layout| L         | 3               |             2 |              |
| Core HTML                       | M         | 2               |             3 |              |
| Creating form/functionality     | H         | 3               |             3 |              |
| Core CSS/Add Flexbox            | H         | 3               |             4 |              |
| Attaching Social Media          | M         | 3               |             3 |              |
| Adding Animation 		            | H         | 3               |             2 |              |
| Reponsive Design/ Media querie  | H         | 3               |             2 |              |
| Total                           |           | 33 hrs          |         33 hrs|              |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
 <!-- let artistName = document.createElement('h1')
  artistName.textContent = data.strArtist
  dataContainer.append(artistName)

  if (data.strArtistClearart) {
    let artistImg = document.createElement('img')
    artistImg.src = data.strArtistClearart
    dataContainer.append(artistImg)
  } -->
```

## Change Log

Search Bar Animations with CSS- The animations I wanted add would have crashed my JS code, I will revisit it at a later time.
