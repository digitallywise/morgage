# Mortgage borrowing and deposit calculator
Mortgage borrowing and deposit calculator is a feature/functional component of project one which was a website developed for Luxvillas Estate agent.

It allows users of Luxvillas Estate agent website to calculate how much money they can borrow and how much deposit they would need towards their mortgage.
The website is fully responsive and is accessible from all devices.

![looks on tablet, desktop and mobile](https://digitallywise.github.io/mortgage/assets/images/responsive.jpg)
 
## Features <a name="Feactures"></a>


### Mortgage borrowing calculator
The calculator collects asks whether there will be one applicant or two applicants applying for borrowing. If two applicants radio button selected it will unhide income two input field. The user would be able to input monthly or yearly income and expenditure and specify how much deposit they have available. If the user inputs monthly income the system will multiply by 12 months to workout yearly income other wise multiply yearly income by five which is the method used to calculate borrowing amounts by the Banks. It will then deduct total expenditure and deposit available and display how much they can borrow in the green box at the bottom of the form. I’ve used green for the result as green is usually used as success colour in many systems. 

![Mortgage calculator](https://digitallywise.github.io/mortgage/assets/images/borrowing-calculator.jpg)



## Deposit Calculator
The deposit calculator asks the user if this is first home or second home as the deposit required are different for the two types of buyers. When the user selects any of the options the calculation method used for each type is displayed in the deposit calculation method box. Once the user enters the value of the property they are interested to buy and press calculate the result is shown in the green box located below the form.

![Deposit calculator](https://digitallywise.github.io/mortgage/assets/images/deposit-calculator.jpg)


## Feature left to implement
Another feature I would have implemented was to have to create a comprehensive mortgage calculator that take income inputs, the age of the person, expenditures including loans and credit card payments and the age of the person and calculate how much they can borrow, how much deposit is needed and over how many years it could be paid off.









## Stake holders of the Website’s Interest

**The property buyers on Luxvillas website**
- This is a good addition to Luxvillas website that would allow users whom might be anxious or confused about how mush they can borrow or how much deposit they would need for the property they have found on Luxivillas website. 

**The estate agent (LUXVILLAS) who’s developing the website**
The Estate agents interest is to add value to the services already being provided which is helping property buyers find a home they are looking for. 



##testing
Both the mortgage borrowing and deposit calculators are working as intended, processing the user input datas explained above and displaying result in the green results box found below the form. I’ve tested the site for responsiveness on all devices as well as for HTML, CSS and Javascript validation and it passed all tests without an error. Please see below.

#### JavaScript 

There are 5 functions in this file.
Function with the largest signature take 2 arguments, while the median is 0.
Largest function has 15 statements in it, while the median is 2.
The most complex function has a cyclomatic complexity value of 3 while the median is 1.

Although there were warnings about the use of “const” but there were no errors. 






### HTML
**Initial test showed the following errors**
- Language attribute missing
Section lacks heading

![Deposit calculator](https://digitallywise.github.io/mortgage/assets/images/html-error.jpg)


**Error fixed**
Added language attribute
Added heading to sections

![Deposit calculator](https://digitallywise.github.io/mortgage/assets/images/html-validated.jpg)


### CSS
No errors
![Deposit calculator](https://digitallywise.github.io/mortgage/assets/images/css-validated.jpg)


## Deployment <a name="Deployment"></a>


- The The website was deployed to Github as ** estate-agent-1 ** after vigorous testing and fixing. - The process of deploying involved the following: 
- Login to Github
- Access the estate-agent-1 website from the top left dropdown menu
- Click on settings from the top right of the navigation bar
- Scroll down to ‘Github pages’ 
- Choose the ‘Branch master’ from the drop down menu
Finally ‘save’ and the permanent url created
Here is the permanent URL of the website ( https://digitallywise.github.io/estate-agent-1/ )

![Deployment screen](/estate-agent-1/asset/images/deployment.png)




 
## Content <a name="Content"></a>


text content was written by myself




## Media

- All photographs of the villa were provided by the owner
Location image directly linked to Bole, Addis Ababa area picture on unsplash.com



## Technologies used <a name="Technologies used"></a>

GitHub for hosting the project
Gitpod for authoring/developing the project
Bootstrap for responsive carousel
W3c for Flexbox tutorials, responsive form and navigation bar creation and practice
CSS validation service - to validate my code
HTML validation service - to validate my HTML
Wave web accessibility test tool - to test for accessibility
Adobe Photoshop, Illustrator and indesign - to edit specification icons, image optimisation, and wire framing


## Credits


I would like to thank my mentor Felipe Souza Alarcon who is genuinely kind and helpful throughout this project. I would also like all the student care, tutors and the whole team at the code institute for all the help they have provided me. 

Finally I would like to thank and acknowledge the platforms that provided me the resources used to allow me complete this project:


- Code Institute instructors - for all the LMS video lessons
- GitHub and Gitpd - for the platform
- Slack and the slack community - for the tech support
- W3c for the tutorials and their validating tools
- Adobe creative cloud - for the image optimisation, icon editing and wire framing tools
- Bootstrap - for the carousel
Google for all the searches I’ve made for resources 
