## Slide 05
Ce talk est avant tout une histoire d'amour entre un développeur et un langage.
Vous l'avez deviné : Java.
Je ne dis pas que c'est le meilleur langage du monde (en fait si ;)) mais juste qu'il m'accompagne depuis tellement longtemps que je voulais lui rendre homage à travers ce talk.
Car oui il n'est pas juste un langage de dev back, on va voir que l'on peut faire de nombreuses choses avec.

## Slide 06
Tout commence pour moi en 1998, dernière année d'école d'ingénieur, il faut choisir un langage et
j'ai beaucoup aimé la découverte de l'objet avec C à java, awt, swing, applet, ..

## Slide 7
- les machine sun solaris et faire du java dessus
- mon premier projet : un simulateur de threads parallèles avec une représentation en AWT
- les applets ... cet ancêtre du WASM
- l'évolution naturelle vers Swing
- les premiers IDE (après Notepad++)

## Slide 8
- mes début en ESN, j'ai la chance d'intégrer une entreprise qui fait du Java
- le WAP
- les EJB
- websphère
- WASD (Eclipse)

## Slide 9
- une fois lancé c'est la découverte d'un ecosystem riche
- struts, mes premiers émois en front (spoiler je n'ai pas aimé)
- l'arrivée de J2E avec les EJB, les servlets et les serveurs d'application
- la joie du JDBC "bas niveau"

## Slide 10
- après Struts ... JSF, c'est mieux ? Non je n'aime toujours pas le front
- la découverte de Spring 1, du XML mais plus d'EJB et plus tard de SpringBoot
- plus récemment Quarkus !

## Slide 11
- et maintenant, là en 2025 une fois devant vus j'en suis où de Java ?
- cela reste mon langage de prédilection mais je ne fais plus d'applications entières
- c'est toujours mon premier reflex pour développer une app

## Slide 12
- java a bien changé
- l'ecosteme aussi a évolué
- tout comme les besoins en entreprise

## Slide 13
Java est-il toujours à la mode, hype et attrayant ?

## Slide 14
- une des choses que l'on entend pas mal (en dehors de l'IA) : full stack
- qu'entend t on par full stack d'ailleurs ?

## Slide 15
- peut on parler de full stack avec Java ?

## Slide 17
- commençons par l'IDE et je ne pouvais pas commencer sans faire un coucou aux dinosaures
- Eclipse l'IDE Java écrit en Java

## Slide 18
- les guerres pro / contr éclipse vs Netbeans

## Slide 19
- plus récemment là on bascule dans Kotlin mais cela reste lié au Java

## Slide 20
- là encore un mixe de plusieurs langages tournant sur la JVM

## Slide 21
- pas la peine de présenter cet outil je pense
- c'est celui que je vais utiliser pour les démos
- je suis un enfant de Maven : ant puis maven 1

## Slide 22
- pour commencer utilisons Java là où on le croise le plus fréquemment : le backend

## Slide 23
- j'en ai rapidement parlé tout à l'heure c'est un de mes premiers gros FWK
- très représenté en entreprise
- Spring 1
- SpringBoot

## Slide 24
- jamais vraiment utilisé
- pour les nostalgiques du JEE ;)

## Slide 25
- le challenger qui se fait une place

## Slide 26
- orienté cloud natif
- mutiny pour la gestion asynchrone / évènementielle
- devX
- simple avec les annotations

## Slide 28
- Avant de passer aux démos, je voulais vous prévenir.
- Le code que vous allez voir peut vous choquer

## Slide 29
- ils se peut que vous allez voir du code style Java 11

## Slide 30
- voir Java 8
- je vous l'ai dit je fais, maintenant essentiellement des démos
- je ne code plus assez pour me tenir au courant

## Slide 31
- une app qui permet d'appeler des endpoints
- une bdd pour persister nos informations
- et on est en 2025, un peu d'IA pour servir tout ça

## Slide 34
20"

## Slide 35
- 55"
- les call API c'est bien mais un peu d'Ux ça mange pas de pain
- clairement pas ma tasse de thé

## Slide 36
- Injection de bean, REST, ...
- C'est pour le talk que j'ai regardé cette extension, n'étant pas un grand fan du front et de mes années JSF c'est vraiment
à titre d'exemple que je le montre aujourd'hui.

## Slide 38
- 1"05
- une app qui permet d'appeler des endpoints
- une bdd pour persister nos informations
- et on est en 2025, un peu d'IA pour servir tout ça

## Slide 39
- Il est temps de ne plus dépendre de sa machine et de passer en vraie production

## Slide 40
- Quand on parle de production la première chose à faire est de créer l'infrastructure.
- Là encore on va bien entendu utiliser Java.

## Slide 41
- Vous avez certainement entendu parler du drama autour de Terraform.
- Cela a permis à un fork de voir le jour : opentofu
- Cela reste la même philosophie : du déclaratif.
- Une alternative existe pour faire du vrai dev pour son IaC.

## Slide 42
- Ce n'est pas le drama Terraform qui a fait créer Pulumi mais cela a mis une forte lumière dessus.

## Slide 43
- Commencer par montrer le provider OVHcloud (https://www.pulumi.com/registry/) avant la démo du code + provider TF pour la doc

## Slide 47
- unamed class / single file source / https://blog.jetbrains.com/idea/2024/02/helloworld-and-main-meet-minimalistic/
- A voir avec les unamed class pour encore plus alléger les scripts (https://openjdk.org/jeps/445)
- Launch Single-File Source-Code Programs JEP330 et JEP458 (https://openjdk.org/jeps/330 & https://openjdk.org/jeps/458)

## Slide 49
1"10

## Slide 50
- 1"20
- Après avoir créer l'application local, préparer l'infrastructure distante il est temps de packager et déployer

## Slide 51
- une ancienne vie à passer à administrer et créer des pipeline sur Jenkins puis Jenkins 2

## Slide 52
- ça n'a pas été mon ami au début mais permet de l'intégration rapide au code
- co cré par Guillaume Laforge

## Slide 56

## Slide 57
- très longtemps les admins sys on été le chaînon terminal d'une mise en production
- gens étranges derrière leur terminaux à faire des choses étranges en ligne de commande

## Slide 58
- puis Kube est arrivé dans la jeu
- orchestrateur magique mais complexe

## Slide 59
- et la présence de YAML ... beaucoup de YAML

## Slide 60
- au final pour moi les admins ressemblaient plus à ça

## Slide 61
- mais moi je voulais voir ça plutôt

## Slide 62
- dernier point (mais pas des moindres) automatiser un maximum grâce à du code

## Slide 63
- Et c'est là que les opérateurs Kubernetes répondent à ce besoin

## Slide 71
- parlons un peu outillage pour créer un opérateur

## Slide 76
1"51

## Slide 77
2"16

## Slide 82
2"33

## Slide 84
- sky is the limit
- knative
- mobile
- desktop
- ...

## Slide 89
2"47