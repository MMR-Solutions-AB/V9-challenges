# Måndag

## Instruktioner

Du har fått en färdigbyggd hemsida där en counter finns tillsammans med increment (ökning) och decrement (minskning) knappar.

Skapa en redux store som innehåller värdet för countern, startvärdet ska vara 0. Manipulera detta värdet genom att calla redux actions när respektive knapp trycks.

-1 när decrement knappen trycks
+1 när increment knappen trycks


I challenges använder vi Redux tillsammans med vanilla Javascript. För att counter värdet ska uppdateras
dynamiskt måste vi använda oss utav ```store.subscribe()``` funktionen som tar emot en callback funktion. Denna funktion
kommer att köras varje gång värdet i store ändras. Genom denna callback funktion kan vi använda DOM manipulation för att ändra
värdet på counter i ```#value``` elementet.

Läs mer om subscribe funktionen här:
[Subscribe listener](https://redux.js.org/api/store#subscribelistener)


I den här utmaningen kommer du att fylla i luckorna för att få en komplett fungerande app i koden

TIPS: Ctrl + f och sök "FILL THE GAPS" för att se vad som behövs läggas till.