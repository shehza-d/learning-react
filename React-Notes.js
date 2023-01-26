/*
React Default Cmts
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

test

//json placeholder
//jo chez state variable ma ho gyi wohi display ho gyi aur kuxh bhi display nhi hoga
//khali array per map nhi kam karta



assignments
//make weather app on react
//apply router on twitter and call api on twitter





hook ?
formik hook for react forms is one of many react form hook app.js ko .jsx nhi karna?
useEffect ? (conponent load hone ky baad chalta hy)()
useffect ko jo funciton diya hy f

dependancy array ma jab kuxh change hoga tw tw funciton change hoga
halka sa type karne per API call karna is bad practise Enter press karne per API call ho


array ma img laga deyn jo har refresh per change ho
lifecycle = kese kya chez chale gyi aur destroy hogyi
2nd way is the best



eventLoop!!  = https://www.youtube.com/watch?v=8aGhZQkoFbQ


queues
next tik =


Hook is realted to UI rerandering 
useState ma jab change aata hy tw component rerendar hota hy
useState vs useEffect
library is box full of functions
hook start with use****


--save is optional 
phale --save se package.json ma nam dependance ma nam save hota tha phale
[formik hook] formik.org


yup is a validation library


full proper signup ka form formik ky sath


26-oct-2022
d/b forEach and .map
hook ma change aane se compnent change hoga

28-oct-2022
id get nhi karni react ma kabhi bhi
cloudanary
DAM (digital assets management)
cloudnary is not recommanded without node server

jis data per query lagani hy wo rakhty hyn database ma

04-Nov-2022
React Router 6
use useBrowerRouter
provider (ye nesting hoti hy)
dont use hash URL
firebase auth
H.W (twitter per login signup page bana hy )
formik file handle

07-Nov-2022

difrent bt SDK and library 
autoComplete 
on refers to event(onAuthStateChanged)

21-Nov-2022
database ma ja kar data dekhni ki zaroorat nhi parni chiye

//Tezeract
07-Jan-2023
//maxwell marchweller course(Acade Mind(youtube))
state change hone per virtual DOM update hota ya saruf wo component ?
saruf ho component rerender hota hy
kya import react purana syntax hy (kyu ky ab react tw globally imported hoti hyna by default)[we can test this by calling React.useState() with importing react]
use the Handler convention in React like const clickHandler=()=>//logic
form submit per page kyu reload hota hy (browser automatically sends a request whenever a form is submitted to the server which is hosting this page)


09-Jan-2023
AcadeMind
kya react package globally install hota hy?
You can't use your custom components as wrappers around other components
Composition
web-vitals in default react app
return React.createElement('div',{attributes:"here"},React.createElement('h1',{},"hello world")
you can't return more then 1 thing from a function ()
stateFull vs StateLess components
StateLess or dumb or presentational component are if they don't have any internal state (i.e static component)bahar se data aay ga andar sabkuxh static hy
StateFull or smart component are ==
.map kyu forEach kyu nhi 
why each child in a list should have a unique "key" props
key ma index nhi deni chiye (agar new item add hoga aur previous item edit ho rha hua tw conflict aaye ga)
{if and for loop and long statements are not allowed in return jsx{}}


{dataArr.length===0 && <p>NO Data found</p>} is this called abusing in JS
dono condition true ho gyi tw true mana jaye ga 
1st condition true hui tw 2nd expression return kar diya jaye ga 
what is a datapoint 

WAYS_TO_STYLE_REACT
Styled components(library)==i don't like it
attacked template literal (styled.button``)
CSS Modules(i love this approach)
page.module.css
import styles from './page.module.css'
<div className={`${styles['form-control']} ${!isValid}&&styles.invalid`}></div>
module css ma css ki files ky name similar ho tw?
MUI recommendation by tezer (MUI is responsive)
So how you can find and fix errors,

because that's one of the most important things
you need to be able to do as a developer,
it's often overlooked and I see way too many developers
or all the students in my courses
that simply ask immediately that they get an error,
they immediately look for others to help them
and that's the wrong approach,
you need to be able to find and solve errors on your own
because errors will always be a part of development.
Therefore in this module,
we will explore how you can make sense of the error messages
React froze at you in certain circumstances,
we will learn how we can debug
and analyze React apps in general,
how we can understand our code whilst it's executing,
and we'll explore the React Dev Tools,
an extra extension we can install in the browser
to get a better React developer experience.


And that is a common thing.
Sometimes when you're writing code, you get errors.
Errors which React catches
or the React development process catches and froze at you.
And as I mentioned before, often
in the Q and A section of my courses, for example
I see students who immediately panic,
when they see an error message,
and they don't read it themselves.
They don't try to solve it themselves.
Instead, they immediately create a new thread
and ask for help.
This will not help you as a developer.
This will not make you a better developer.
It will actually make you a worse developer.

You need to be able to understand



29

00:01:27,370 --> 00:01:29,820

and solve errors on your own.



30

00:01:29,820 --> 00:01:33,450


So don't panic, read error messages,





122


00:05:58,470 --> 00:06:01,290


have a look at the line or the file it's coming from,





123


00:06:01,290 --> 00:06:03,900


have a look at the code snippet it might be showing you





124


00:06:03,900 --> 00:06:07,270


and then look at the problematic code part,





125


00:06:07,270 --> 00:06:09,340


at the problematic code snippet.





126


00:06:09,340 --> 00:06:10,940


Look at the error message,





127


00:06:10,940 --> 00:06:14,150


connect the error message to the snippet it's pointing at,





128


00:06:14,150 --> 00:06:17,773


and you will be able to solve most errors.


SOURCES tab in chrome have call stack ,variable memory(breakPoints)
React dev tools extension


13-Jan-2023
props.children ???
Number(input) can be replaced with +input
react ma forEach nhi lag sagta kyu ky jab expression evaluate hoga tw wo JSX return nhi kare ga
Controlled and uncontrolled components 
useEffect ma asyncness
debouncing technique (make sure we are not doing something on every key stroke (specilly network request)(we measure time if(inactivity==500ms || on every 3 word count)))
# [clean-up function] return statement in useEffect (idher saruf function return hoga)
phali bar useEffect ki execution ma cleanup nhi chale ga 
jab bhi agar 2nd time useEffect ne execute hoga ho usse phale ak bar cleanup chale ga phir main useEffect content chale ga 

This will run as a cleanup process before useEffect executes this function the next time.
So to make it clear when this runs, whenever this useEffect function runs,
before it runs, except for the very first time when it runs, this cleanup function will run.
And in addition, the cleanup function will run whenever the component you're specifying the effect in unmounts from the DOM.
So whenever the component is reused So the cleanup function runs before every new side effect function execution
and before the component is removed. And it does not run before the first side effect function execution.

we can use useEffect without dependency array to run every time the state changes something after every component is rendered

setState(should not depend on another state)

postMark to send emails
need a verified domain
need email client with same domain name
mail send verified email se hi hoga
mail hum SMTP protocol se bhi bhaj sagty hyn aur REST API se bhi
mail ma hum text bhi bhaj sagty hyn aur html body bhi (dono ma se koi ak)
mail template ki html ma JS nhi lagti koi external link nhi lag sagty 
whatsapp ka ye system hy ky docker ka ak server banta hy(jo msg kare gye wo server per aay gye (P2P))

14-Jan-2023
alian Destructring 
const { isValid: emailIsValid } = emailState;
const { isValid: pswdIsValid } = pswdState;

JS don't give us Debouncing and throtaling  it is achived by setTimeout(webAPI)

16-Jan-2023
useEffect runs after the component is rendered 
useEffect dependancy array se chalta hy but kya usky change hone se component rerender hota hy
useRef is like querrySelector (it is avaliable on every html element in JSX)

17-jan
component ky folder ma reusable components aaty hyn 
pages ma puray page aur unky specific non-reusable components
MUI v1-4 is mui/core and later version are @mui/material

typography ma varient is for style it as like h3 and component is for symantic output like h1




26-Jan-2023
<NarLink > from react-router-dom (for active class in navbar)
 navigate("/welcome", { replace: true });  for disabling back to specific page
nested route ky link ma forward / nhi dalna
https://youtube.com/playlist?list=PLC3y8-rFHvwjkxt8TOteFdT_YmzwpBlrG





*/
