---
title: "The Emerging Ship"
date: "2021-01-12"
description: "A project is about to fail. Everybody feels it won't meet the hard deadline. But the app ended up released on time and bug-free. How is that possible? Read on."
featuredImage: "an-emerging-ship.png"
---
<p>
  <img alt="An Emerging Ship" src="an-emerging-ship.png" />
</p>

**Quick summary:** A project is about to fail. Everybody feels it won't meet the hard deadline. But the app ended up released on time and bug-free. How is that possible?

I want to tell you the real story behind **an ambitious two-month project** my team completed, with a huge impact on our organization. A very stressful, challenging, and full of surprises journey, marked by developers being the leaders. **I intend to reveal why things went bad and how with a proper smart set of decisions the front-end team managed to navigate its boat**.

### Table of Contents
1. [The Project](#the-project)
    - [Project Context](#project-context)
    - [Project Goal](#project-goal)
2. [What Compromised the Project (Early Signs)](#what-compromised-the-project-early-signs)
3. [Developers in Charge](#developers-in-charge)
4. [Developers' Strategy to Deal with Impediments](#developers-strategy-to-deal-with-impediments)
    - [No Clear Leadership](#no-clear-leadership)
    - [Lack of Domain Knowledge](#lack-of-domain-knowledge)
    - [Incomplete Requirements](#incomplete-requirements)
    - [Too Many Teams](#too-many-teams)
5. [Best Practices Summary](#best-practices-summary)
6. [Final Words](#final-words)
7. [Resources](#resources)

___

## The Project
The project is intentionally interpreted mostly from a front-end perspective to avoid the risk of having a blurry presentation.

**Which parties were involved:**
 - Product owner (PO)
 - Front-end team (2 devs)
 - Backend team (2 devs)
 - QA team (2 testers)
 - UX/Designer
 - Content manager (translations)

In total **9 people** from **6 departments** were allocated for this two-month effort (around 9 weeks). The UX design was done in advance, so it's not included in the total duration.

### Project Context
Rapidly growing companies are usually investing in new hires and changes in the hierarchy structure. From all the **9 people involved**, 2 were **new employees** (PO and design), 2 had **a year of experience** in the organization, and from all **6 teams** 3 were **newly formed** while the rest were **restructured** to an extent. The **newly formed** UX team was extensively focused on the UIs in Figma  backed with translations delivered by a content manager who **switched departments**. On top of that building applications with a PO was **new for us** - these duties used to be fulfilled by a project manager in the past.

Where was I in the whole picture? You probably know the answer. Yes, I was too part of a **newly formed web apps team** of front-end developers. Up until this moment we were located in different cross-functional teams formed around specific long-term company products.

So many new, new, new.

**To summarize:**
>Dynamic environment, new colleagues, new company structure. A  dangerous combination for ambitious projects with tight deadlines.

### Project Goal
The purpose of the application was to allow customers **easily find and operate** on their subscription data, **reducing, as a side effect, the number of related support tickets** significantly.

To make things more complicated the project must account for all services, add-on products, and user edge cases dragged in over the years of product development.

## What Compromised the Project (Early Signs)
Getting back from vacation I was immediately thrown into the process, having no idea what this new project is about. All planning and grooming sessions were already in the past, and teams were formed. At the same time, it was left to the individual parties to self-organize somehow and find their way in. I felt very uncomfortable and anxious: no information to start with, no initial setup, but probably the **the most noticeable fact was the lack of clear leadership**. To fill the gap **many project management tasks got "naturally" assigned to the front-end team** and from that point on required additional time for coordination.

**A quick side note:** Often a project failure is determined by a few common factors. In one of his recent [newsletters](https://mailinglist.humanwhocodes.com/) (_"Thoughts on mistakes"_) [Nicholas Zakas](https://twitter.com/slicknet) grouped them like so: **skills, luck**, and **hidden information**. In such a combination they influence the outcome of a decision, but all of them apply to IT projects in general.

>With a few exceptions, you can control the amount of skill you bring into making a decision, and you can work to uncover hidden information (though sometimes it's not obvious where to look), but luck is completely out of your control.

Getting back to the story, and I have to admit, it was a **minefield of hidden information** popping up until the final release. All the skills required were present and even more of that. No unexpected event, call it luck if you want, has ever occurred. To uncover and deal with invisible use cases or wrong assumptions was the project's most common bottleneck.

What prompted hidden information:

 1. **No clear leadership.**

Not having a dedicated PM or a fully available project lead resulted in recurring distractions to handle organizational activities.

 2. **Lack of domain knowledge.**

Not understanding the domain well enough — especially by new employees — is interconnected with the number of changes coming later in the development process. The higher the position, the worse.

 3. **Incomplete requirements.**

Gaps in domain knowledge led to unclear or too narrow requirements driven by not actively involving people with good matter understanding in the planning stage.

 4. **Too many teams.**

Having to coordinate six different teams would be a needless effort if people were otherwise grouped around the project in a single cross-functional unit.

All these implications didn't give us up, of course, but **forced (the front-end devs at least) to deliberately address problematic areas both code and management-wise**.

But why should developers share the organizational burden, you may ask? Couldn't you simply pass it down to the PO or someone from the upper management? After all, it is their job and you are just writing code, right? These are legit questions and we asked them ourselves many times, nevertheless the project ended up deliberately led by the dev team. **We were developers in charge.**

## Developers in Charge
The IT practice confirms whenever a team finds itself in a project storm, the best strategy is to **allow experience developers to navigate the ship**. This should go on until the process can be run in a normal temp with planning phases and iterations — in other words when the storm has already passed.

>Extreme Programming (XP) was created in response to problem domains whose requirements change. Your customers may not have a firm idea of what the system should do. You may have a system whose functionality is expected to change every few months. In many software environments dynamically changing requirements is the only constant. This is when XP will succeed while other methodologies do not.

The quote from [when should XP be used](http://www.extremeprogramming.org/when.html) well describes the situation I was in at that moment. Our tech fellowship took the lead, because: **we knew QA and backend devs well understand the domain, our front-end team can provide fast feedback loops, we are closer to the UI and flexible enough to allow for late changes**.

**It was the right move.** Situations like this should be considered extraordinary and avoided whenever possible, though. There is nothing better than working in a constant phase, doing what you do best, while PM handles the cross-team links. Everybody is on their seats and no huge surprises are to be expected. By saying this I also understand it's largely wishful thinking. The harsh truth is **most of the companies are not agile** or don't follow any structured methodology or apply frameworks like SCRUM or Kanban. I am a Kanban fan, but even [its obvious benefits](https://medium.com/better-programming/scrum-is-dead-all-hail-kanban-the-new-king-2cd6249feef8) are rarely enough to convince organizations to give it a try nowadays. Despite the endless sugary talks and big investments in agile frameworks like SCRUM fx., **most of the companies rely on XP** even if they don't realize it. Developers' responsibilities overlap with PM, marketing, SEO, design, etc., and that is not a coincidence.

<p>
  <img alt="Take some rest" src="take-some-rest.png" />
</p>

## Developers' Strategy to Deal with Impediments
We, in the front-end, built a flexible strategy to deal with project uncertainty, quickly realizing that great code alone won't be enough for our success.

My colleagues are skilled people who rarely face technical challenges they can't solve, while sporadic events (like the Covid-19 crisis) are very much unpredictable and difficult to prepare for. With this in mind, the strategy's focus is put primarily on **dealing with hidden information and minimizing its negative impact project-wise**.

Once more, the four impediments:

 1. No clear leadership.
 2. Lack of domain knowledge.
 3. Incomplete requirements.
 4. Too many teams.

Solving each problem will eventually catalyze more data discoveries throughout the process, providing you, alongside, with handy tools to handle incoming change requests.

Let's take a closer look.

### No Clear Leadership
I decided to act proactively on this sudden project and conducted a **kick-off meeting** to organize everybody and build-up some confidence. The agenda was:

  - Project requirements
  - Duties between teams
  - Front-end tasks
  - Project repo and codebase
  - Communication channels
  - Split and estimation

This was an opportunity to meet for the first time and get a feeling the project is finally moving. Further on **regular sync meetings** were set to discuss blockers, progress, or new information collected previously.

### Lack of Domain Knowledge
It became obvious the QA and backend teams best understand most of the underlying use cases. Two activities helped in this situation:

  - Quick short iterations and early releases.

Deployments were performed daily so that QA and backend always had something usable to exercise on.

  - Frequent sync meetings.

This is the place to discuss any new findings since the last release and to turn them into development tasks.

### Incomplete Requirements
Incomplete requirements are often "dressed" in a "final" UI design and are usually captured late when QA puts their hands on the front-end prototype. The following recipe was used to answer back:

  - Deploy incomplete prototypes.

Releasing usable prototypes with fake backend and English texts to allow for a quick feedback loop is a good idea as often endpoints may not yet exist, translations and production-ready texts may also be in progress.

  - Break the [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

The DRY principle is of no use when working with frequently changing prerequisites where a [WET codebase](https://overreacted.io/the-wet-codebase/) will enable quick interventions with almost no side effects.

  - Accompany every change with refactoring.

Frequent changes often introduce tech debt. Writing explicit code and conveying each tweak with a small refactoring in the same place/component is one way to deal with it. This investment pays off with every subsequent change.

  - Test it thoroughly.

Keep high testing standards no matter what. They guarantee bug-free releases. Writing tests for every new feature or an edge case is important because it also leverages our confidence level in the chaos of thousands of new additions and deletions.

### Too Many Teams
One of the worst combinations is an actively coding programmer who at the same time is required to manage a project. It is **something to be avoided in any means or, if not possible, used very wisely for a short period**.

How did the front-end team compensate for the coordination cost:

  - Passing duties between each other.

I and my colleague shared the burden by having shifts when organizing sync meetings and handling iteration loops.

  - Set direct communication channels.

That was done in Slack for everything from status updates, through requirements discussions, to meetings planning.

## Best Practices Summary
The table below summarizes the practical principles to deal with certain project bottlenecks:

| Approach | Benefits |
|---|---|
| Hold a kick-off meeting | Builds confidence and reduces stress. |
| Hold regular sync meetings | Polishes requirements by giving a chance to parties with domain knowledge to share. |
| Keep iterations short | Quick feedback and testing ideas. |
| Release a static prototype early | Potentially catching major assumption flaws ahead of time. |
| Use WET vs DRY principle | Painless and frequent changes with minor side effects. |
| Make changes in conjunction with refactoring | High codebase quality and quicker future changes. |
| Test the edge cases | Minimizes code fragility over time. High chances of releasing bug-free products. |
| Share management duties | Reduces multitasking and allows for focus on technological challenges. |

## Final Words
I have to admit that I didn't work overtime for this project. That creates a false feeling of success which in turn tricks you to repeat the same mistakes next time.

Surprising results were achieved by applying the strategy above and I would like to bring some numbers. The project itself was not lengthy (9 weeks), but appeared to be heavy in terms of tasks and iterations completed. Launched **within its hard deadline** we had **zero bugs reported on the front-end** two months after its release - I basically hit the deploy button and moved on. Simultaneously our work had a great effect support-wise with around **250 fewer domain-related tickets per week** reported.

What had happened comes to confirm
>XP projects unanimously report greater programmer productivity when compared to other projects within the same corporate environment.

Remember this little guide if your next project gets in peril.

___
📩 [Subscribe](https://webup.org/blog/subscribe/) for my next handcrafted piece on the Front-end. <br />
You can also [follow me on Twitter](https://twitter.com/moubi) for more frequent updates.
___

## Resources
  - "Thoughts on mistakes" - a "Top of the Month newsletter" issue by [Nicholas Zakas](https://twitter.com/slicknet)
  - [When should Extreme
Programming be Used?](http://www.extremeprogramming.org/when.html) - requirements for XP's implementation
  - [Scrum Is Dead. All Hail Kanban, the New King](https://medium.com/better-programming/scrum-is-dead-all-hail-kanban-the-new-king-2cd6249feef8) - some of the benefits of Kanban over SCRUM from a practical perspective
  - [Don't repeat yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) - what does DRY mean (Wikipedia)
  - [The WET Codebase](https://overreacted.io/the-wet-codebase/) - a video by Dan Abramov on why WET approach is often better for code collaboration.


