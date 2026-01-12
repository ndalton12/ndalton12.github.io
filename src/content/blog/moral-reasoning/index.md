---
title: Evaluating Long-Term Ethical Decision-Making Capabilities of Reasoning LLMs
date: '2025-05-04T12:00:00.00Z'
description: "How does chain-of-thought reasoning affect ethical decision making in LLMs?"
---

# Are Reasoning Models More Moral?

Reasoning models like [o1](https://openai.com/index/introducing-openai-o1-preview/) introduced the world to LLMs that
can "think" -- that is, models which are trained to spell out their thoughts before answering, giving them time to brainstorm, plan,
and backtrack. Furthermore, it's become clear that reasoning models are superior to their non-reasoning counterparts at
STEM problems. The latest in OpenAI's o-series, o3, is capable of solving PhD level problems. 

Despite their successes, reasoning models are not a silver bullet for everything. For example, they don't necessarily
outperform non-reasoning models at [longform writing](https://eqbench.com/creative_writing_longform.html). Another area where
the benefits are unclear in ethical decision making, which, to my knowledge, has not yet been studied.

Note that I will use thinking and reasoning interchangeably throughout.

# Setup and Methodology
I hypothesized that reasoning models may perform substantially differently in complex, ethically challenging situations, perhaps
by preferring more game theoretic solutions to problems, instead of relying on more intrinsic heuristics (somewhat akin to reflexive action
in human decision making). I set out to study this by creating several morally/ethically ambiguous simulations and tasking LLMs with
participating in the simulations. 

The research question can be stated as such: "Can current AI thinking models make consistently sound long-term decisions that align with human ethical principles when confronted with challenging, multi-stage simulated scenarios involving moral ambiguity and conflicting stakeholder interests?"

## Measuring Outcomes
I also assigned outcomes some utility value based on three moral frameworks, as noted below.

* Virtue theory: “Virtue Theory is an ethical framework that says that we ought to focus not on what rules to follow, but on what kinds of people (or organizations) we should be, and what kinds of ethical exemplars we ought to imitate” (https://conciseencyclopedia.org/entries/ethical-theory-virtue-theory/)
* Rawlsian minimax: “In ethics: Rawls’s theory of justice…is known as the “maximin” principle, because it seeks to maximize the welfare of those at the minimum level of society.” (https://www.britannica.com/topic/maximin-principle) 
* Utilitarianism: “we should choose the option that “maximizes utility,” i.e. that action or policy that produces the largest amount of good.” (https://iep.utm.edu/util-a-r/) 

The utility values are somewhat arbitrary, but represent (hopefully) good _relative_ markers. I also recorded each decision made by an LLM
and re-ran each scenario 30 times. 

## The Scenarios
Each scenario is represented by a branching decision tree, with some probability of transitioning to a node at a further level. I limited the depth of
the tree to 3 to avoid combinatorial explosion when creating the scenarios. I selected several criteria for making each scenario:

* Inherent ambiguity with no single "correct" solution;
* The presence of multiple stakeholders possessing conflicting interests
* Decision points with significant, cascading long-term consequences
* The potential for well-intentioned actions to yield unintended negative outcomes
* The necessity for trade-offs between competing ethical values (such as efficiency versus fairness or individual rights versus collective good).

I initially hand-selected broad outlines for morally interesting situations, and had an LLM (Gemini 2.5 Pro) help me flesh out the narratives, 
which were then codified into YAML files representing the decision tree. 

Here is a brief description of each scenario:

* **Aeridor**: sci-fi like scenario in which we can choose to develop Autonomous Combat Systems that give us an edge over our rival nations, but are condemned in the planetary alliance.
* **Aridian Dust**: Commanding a tactical force to secure an important objective in a hostile zone. Multiple contending players and civilian settlers involved.
* **Predictive Policing**: Whether to use predictive analytics to allocate police resources efficiently, but could be subject to bias.
* **Silent Swarm**: An unknown but highly advanced alien object enters friendly space. Decide what to do.
* **Undercover**: Undercover agent in extremist org. Participate in atrocities or avoid and risk blowing your cover, losing invaluable intel.
* **Vorlag**: A hyper-violent alien race (Vorlag) routinely invades friendly planets; a vitality dampener was developed to reduce their ability to reproduce, but a cure has been discovered. Do you hide the cure, do nothing, or help with its proliferation?

You can see all the scenarios in full [here](https://github.com/ndalton12/moral-sim/tree/main/scenarios). 

Sidenote: yes, several more of these were inspired by video games, can you guess which?

## LLMs Tested

I decided to test the following LLMs: GPT-4o, GPT-4o-mini, o4-mini, Claude-3-7-sonnet, and Claude-3-7-sonnet-thinking (2k tokens). Note that
Gemini 2.5 Pro is specifically excluded due to bias, since I used to it help generate narratives in each scenario. I picked these models as
they are close to or at state of the art, and for availability/budget reasons.

The GPT models serve as non-reasoning proxies for o4-mini (since it does not have a direct non-reasoning counterpart), while Claude 3.7 Sonnet
has a direct "thinking" (reasoning) mode that we can use to compare against. I used a temperature of 1.0 for all models.

# Results

I won't show all the decision distributions since it would be too long, but there are some particularly interesting decision points in some scenarios that I will point out.

## Aeridor

![aeridor chart](images/aeridor.png)

Models generally favored outcomes related to defensive postures and negotiation. This is one of the less interesting scenarios in that
all the models converge on similar behavior.

## Aridian Dust

![aridian dust](images/aridian_dust.png)

More interesting result, o4-mini is a lot better than gpt counterparts, but Claude thinking is much worse at being utilitarian. This is probably just noise though since they make the same decisions.

![aridian dust decision](images/aridian_dust_decision1.png)

In the first decision in this scenario, we see that the newer models (o4-mini, claude) prefer de-escalation but the GPT models prefer the drone strike. It's
also interesting to note that o4-mini is the only model that significantly uses the ground offensive.

![aridian dust decision](images/aridian_dust_decision2.png)

In a later decision, we can see that the Claude models prefer the more tactical option in infiltration, as opposed to siege tactics. This somewhat surprised me
given that siege tactics would normally be seen as the less harmful option (but it's arguable).

(Note that this decision point isn't always reached, which is why the percentages no longer go to 100%).

## Predictive Policing

![predictive policing](images/predictive_policing.png)

All models do well here, finding solutions that are generally good. It seems that in certain scenarios, models have converged on similar pathways.
GPT-4o does a bit better than the rest, but this is likely due to it pursuing a more aggressive initial strategy sometimes (not shown).

## Silent Swarm

![silent swarm](images/silent_swarm.png)

Here we again see a large divergence between the newer models like o4-mini and Claude, and the older GPT models. The newer models tend to take a more
active approach, which can actually end up being detrimental. Looking at some of the decisions highlights this below.

![silent swarm decision](images/silent_swarm_decision2.png)

In this decision, for example, following a passive scan, most models aim to prepare defenses. Interestingly however, Claude sometimes decides on
an aggressive path, while Claude with Thinking attempts diplomacy (while non-thinking does not do this).

![silent swarm decision](images/silent_swarm_decision3.png)

This decision highlights a clear difference between the thinking and non-thinking models for the first time. Although unintuitive, the thinking
models (o4-mini and Claude with thinking) often chose not to develop counter-measures and instead only continue monitoring. Further work is left
to examine the chain-of-thought to see why this happens.

## Undercover

![undercover](images/undercover.png)

Another scenario in which the models perform quite similar. However, there are some interesting differences in decision making.

![undercover decision](images/undercover_decision1.png)

Here we can see that after maintaining cover, the thinking models always chose to escape separately, while Claude non-thinking and GPT-4o
always choose to escape alongside the extremists of which they are undercover with. Neither option is truly "better" in this case;
I specifically designed this scenario to almost always have a bad outcome!

## Vorlag

![vorlag](images/vorlag.png)

This scenario has by far the most interesting results. Incidentally, it was also the one I spent the most time tweaking while coming up
with the simulation system. Here we can see a stark and statistically significant difference between Claude with and without thinking.
The difference between GPT-4o and o4-mini is also close to significance. Let's dive into the decisions to see why.

![vorlag decision](images/vorlag_decision1.png)

In the very first decision, we can see that Claude without thinking usually prefers the most reconciliatory option (Full Cure & Integration),
but Claude with thinking always prefers the more middle ground cure and containment option!

![vorlag decision](images/vorlag_decision2.png)

Another special feature of this scenario is that for the later decisions, it asks which manifestation (response) from the opposing faction
is preferable. This decision is one of those cases, and all of the choices are fairly sub-optimal. Interestingly, Claude only chooses 
Guerilla warfare when thinking, and is not generally against the Vorlag from conducting open warfare (as opposed to seeking dangerous allies).
One could see this as a subversion of Claude's harmless principle.

It's also worth noting that both o4-mini and Claude with thinking have similar decisions here, as compared to the other models.


# Findings and Discussion

Some common themes emerge from these results. Primarily, there is evidence that reasoning/thinking models do perform differently when
making ethical decisions, but only some of the time, and not in easily predictable ways like I had hypothesized. Further, it's worth noting
that all of the models are not necessarily adverse to open warfare and other violent decisions, even when presented with alternatives. However,
it seems most of the models, generally speaking, tried to maintain "middle ground" decisions when presented with them. 

The results also (albeit weakly) suggest that thinking/reasoning models are more "calculating", in that they do indeed attempt to make
more game theoretic decisions (often incorrectly). Likewise, I think the most interesting finding is that Claude can indeed
make wildly different decisions when given the chance to think, but this only happens in edge cases (like Vorlag). 

Future work can expand on finding more of these edge cases, and what triggers them. I would also like to expand to more models and do 
ablations over decision tree depth and complexity, as well as reasoning effort/ thinking tokens. Multi-agent simulations and human
baselines would also certainly be of interest. If you want to collaborate, please do email me niall.dalton12@gmail.com!

-- Niall Dalton