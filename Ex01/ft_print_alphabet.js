let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour!';

#include <stdio.h>
void ft_print_alphabet(void);
int main ()
{
        ft_print_alphabet();
        return(0);
}
void ft_print_alphabet()
{
        char ch;
        for(ch = 'a' ; ch <= 'z' ; ch++)
        {
                 putchar(ch);
        }
    return 0;    
}
