# Authorisation

In our day-to day lives, we see these signs:
![Unauthorised](https://www.labelident.eu/images/product_images/info_images/3007_0_Verbotszeichen_P06.jpg)
I know who I am, people know who I am, but if i'm not the right person, I'm not allowed to go into this place.

Authorisation is used all the time in our daily lives. This could be anything between having access to the university library or using the internet.

Let's formalise this.

## The lampson authorisation model

![enter image description here](https://www.researchgate.net/profile/Hasan_Qunoo2/publication/228728499/figure/fig1/AS:650845624475656@1532185097309/Lampsons-access-control-model21.png)
In this model:

* The subject is usually the user, or a process
* The access request is a request to access an object
* An object can be a resource, like a file on a server
* The reference monitor is responsible for denying or allowing access.

Authorisation can be done on the subject level, or the object level. The subject makes the access request which is given to the access monitor which decides whether they can access the object or not.

There are two basic access modes - observer or author.
In unix, we have read, write and execute.

## Rules of least privilege

We should be granting *the minimun acccess* required to complete the job. When put in a situation when providing access for people to complete tasks, we should be taking their job into consideration, and what would be the minimum privileges they need to complete that job.

* *Privilege Escalation* - when someone can get extra levels of access by increasing their privileges within a system.
* *Vertical Escalation* - Access resoruces granted to more privileged accounts.
* *Horizontal Escalation* - Access resouces granted to similar accounts.
