##Zadanie 1
Napisz test jednostkowy korzystając z Jest, który sprawdzi poprawność działania funkcji sum polegającą na dodawaniu dwóch argumentów (a i b).

Następnie napisz funkcję sum i zaimportuj ją do pliku z testem.

##Zadanie 2
Nie korzystając z przeglądarki (skup się na razie tylko na terminalu) napisz komponent, który będzie posiadał dwa przyciski: - oraz +. Po kliknięciu w każdy z nich odpowiednio zwiększy i zmniejszy stan licznika. Licznik wyświetl na ekranie. Domyślny stan licznika to 0, ale udostępnij jego zmianę poprzez props (np. start).

Napisz pole typu input oraz przycisk obok (np. Zmień). Jeśli wprowadzisz liczbę do pola (np. 99) i naciśniesz przycisk, to stan początkowy licznika powinien zmienić się na tę liczbę. Przyciski - oraz + powinny analogicznie odejmować i dodawać w zależności od tej liczby, która jest stanem początkowym licznika.

Wprowadź przycisk Reset, który będzie resetował licznik do jego stanu początkowego (0 lub wartości propsa start).

Napisz testy do Twojego komponentu, które sprawdzą:

czy stan początkowy komponentu wynosi 0 jeśli nie przekażemy propsa start
czy stan początkowy komponentu wynosi 10 jeśli przekażemy propsa start równy 10
czy komponent posiada przyciski do dodawania oraz odejmowania
czy po kliknięciu w przyciski stan odpowiednio się modyfikuje
czy po wpisaniu liczby w pole tekstowe oraz naciśnięcię przycisku Zmień zmienia się stan przycisku
po naciśnięciu przycisku Reset stan licznika zmieni się na początkowy
Po napisaniu testów (o ile przechodzą na zielono). Zobacz swój komponent w przeglądarce i sprawdź działanie.

##Zadanie 2*
Spróbuj wykonać zadanie 2 w odwrotnej kolejności, tzn. najpierw zaprojektuj testy - na ich podstawie znasz wymagania, jak ma działać komponent. Potem napisz kod Twojego komponentu równolegle z uzupełnianiem testów.

##Zadanie 3
Jeeli wykonałeś / wykonałaś zadanie z REST API, napisz testy do komponentów. Testy niech sprawdzają ile komponentów User znajduje się w komponencie UserList. Sprawdź co się stanie, jeśli do UserList przekażesz pustą tablicę.

##Zadanie 4
Napisz testy E2E z zadania nr 2 wykorzystując Cypress
