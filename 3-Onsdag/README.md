 # Onsdag

## Instruktioner

Du ska skapa en tasks app där du kan lägga till tasks för dagen att utföra. I koden finns det en färdigbyggt funktion som heter renderTasks. Denna funktion är ansvarig att rendera ut alla tasks från våran redux store till vår page.

Du har även färdig HTML kod med ett inputfält för att namnge tasken och 2 buttons (add task & clear task) som respektive lägger till en task och rensar alla tasks.

Vår store ska bestå utav en array som innehåller alla tasks.

Din uppgift är att när add task knappen trycks ska du lägga till tasken i arrayn i vår redux store. Funktionen för att hämta värdet från input fältet är redan skapad, du behöver vidarutveckla denna funktion för att spara det hämtade värdet i redux store.

När clear knappen trycks ska vi sätta en tom array i redux store för att rensa alla tasks.