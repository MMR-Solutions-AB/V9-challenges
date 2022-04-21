# Tisdag

## Instruktioner

Du har en hemsida som kommer att visa ett hemligt meddelande hämtad från en endpoint.

I koden finns det en färdigbyggd funktion som heter ```getSauceFromUrl```. Funktionen kommer att
hämta det hemliga meddelandet och returnera värdet. Din uppgift är skapa
en redux store med redux thunk som middleware. Du ska hantera datan
från getSauceFromUrl till redux tillsammans med thunk för att invänta datan asynkront.

Värdet ska läggas in i ```#sauce``` elementet.