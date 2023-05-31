Pseudo klase
- :hover
- :disabled
- :checked

Transformovi
- Translate – usporedit sa position:absolute
- rotate
- scale

Transition
- Transition-property
- Transition-duration
- Transition-delay
- Transition-timing-function -> https://easings.net/
- Cubic bezier maker u browseru
- Shorthand
- Keyword all za transition-property i zasto ga izbjegavat (npr responzivnost)
- Pokazat razliku izmedu rotate i scale u tranziciji

Animation
- Keyframes from/to
- Animation-name
- Animation-duration
- Animation-timing-function
- Animation-delay
- Animation-iteration-count
- Animation-fill-mode (triba vizualizirat)
    - Forwards (zadrzi zadnji frame)
    - Backwards (triba pripazit jer )
- Animation-direction (neki kul primjer sa alternate)
- Shorthand
- Keyframes postotci
- Animation-play-state (pause na hover)

Critical rendering path
- Server preko HTTP-a poslužuje html i css
- DOM
- CSSOM
- Render tree
- Layout
- Paint
- Composite layers

Kod animiranja je cilj postići isti efekt na način da se što manje navedenih faza/procesa odvija (tj. uz što manje rada)
- Razlikujemo skupe operacije koje trigger-aju layout fazu
- Width
- Height
- Position

Manje skupe operacije koje trigger-aju paint fazu
- Color
- Background-color

Najoptimalnije operacije koje trigger-aju samo composition fazu
- Opacity
- Transformovi (translate, rotate, scale)

- Primjeri kompozitnih layera (npr opacity sam po sebi ne ide u kompozitni layer, vec samo kad ima transition/animation) https://medium.com/masmovil-engineering/layers-layers-layers-be-careful-6838d59c07fa
- Will change property
- Prokomentirat https://dump.hr/ animaciju u headeru (baza je sta triba i transform-ovima i necim drugim animirat sta uzrokuje retrigger layout faze)