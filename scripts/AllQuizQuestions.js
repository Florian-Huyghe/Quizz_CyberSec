const allQuizQuestions = [
    {
        question: "Qu'est-ce qu'un pare-feu ?",
        answers: {
            a: "Un outil de surveillance des performances du système",
            b: "Un type de malware",
            c: "Un outil qui surveille et contrôle le trafic réseau entrant et sortant",
            d: "Un logiciel de sauvegarde"
        },
        correctAnswer: "c"
    },
    {
        question: "Que signifie VPN ?",
        answers: {
            a: "Virtual Protection Network",
            b: "Virtual Public Network",
            c: "Virtual Private Network",
            d: "Virtual Packet Network"
        },
        correctAnswer: "c"
    },
    {
        question: "Quel est l'objectif principal d'un test de pénétration ?",
        answers: {
            a: "Vérifier les performances du système",
            b: "Évaluer la sécurité d'un système en simulant une attaque réelle",
            c: "Tester la rapidité du réseau",
            d: "Analyser les flux de données"
        },
        correctAnswer: "b"
    },
    {
        question: "Qu'est-ce qu'un ransomware ?",
        answers: {
            a: "Un programme antivirus",
            b: "Un logiciel malveillant qui chiffre les fichiers et demande une rançon",
            c: "Un type de pare-feu",
            d: "Une méthode de sauvegarde de données"
        },
        correctAnswer: "b"
    },
    {
        question: "Que signifie l'acronyme DDoS ?",
        answers: {
            a: "Denial of Service Distribution",
            b: "Distributed Denial of Service",
            c: "Direct Data of Service",
            d: "Distributed Database Online Security"
        },
        correctAnswer: "b"
    },
    {
        question: "Qu'est-ce que le phishing ?",
        answers: {
            a: "Une tentative de voler des informations sensibles en se faisant passer pour une entité fiable",
            b: "Une attaque ciblant des serveurs DNS",
            c: "Une technique de chiffrement des données",
            d: "Un moyen de protéger les transactions en ligne"
        },
        correctAnswer: "a"
    },
    {
        question: "Qu'est-ce que SSL ?",
        answers: {
            a: "Secure Storage Layer",
            b: "Secure Socket Layer",
            c: "System Security Level",
            d: "Secure Service Layer"
        },
        correctAnswer: "b"
    },
    {
        question: "Qu'est-ce que HTTPS ?",
        answers: {
            a: "Hyper Text Transmission Secure",
            b: "Hyper Transfer Protocol System",
            c: "Hyper Text Transfer Protocol Secure",
            d: "Hyper Transfer Privacy Secure"
        },
        correctAnswer: "c"
    },
    {
        question: "Qu'est-ce qu'un certificat SSL ?",
        answers: {
            a: "Un fichier qui permet de vérifier l'identité d'une personne ou d'un site web",
            b: "Un type de pare-feu",
            c: "Une méthode de cryptage des données",
            d: "Un fichier de sauvegarde"
        },
        correctAnswer: "a"
    },
    {
        question: "Qu'est-ce que l'authentification à deux facteurs ?",
        answers: {
            a: "Un processus de sécurité avec un seul facteur d'authentification",
            b: "L'utilisation de deux mots de passe",
            c: "Un processus de sécurité nécessitant deux facteurs différents pour accéder à un système",
            d: "Un processus de verrouillage du compte après plusieurs tentatives"
        },
        correctAnswer: "c"
    },
    {
        question: "Qu'est-ce qu'un virus informatique ?",
        answers: {
            a: "Un programme de protection des données",
            b: "Un logiciel qui se propage et endommage des fichiers ou des systèmes",
            c: "Un outil pour vérifier la sécurité des réseaux",
            d: "Une méthode de détection des menaces"
        },
        correctAnswer: "b"
    },
    {
        question: "Qu'est-ce qu'un mot de passe fort ?",
        answers: {
            a: "Un mot de passe comportant au moins 8 caractères et des chiffres",
            b: "Un mot de passe contenant au moins 8 caractères, des lettres majuscules, minuscules, des chiffres et des symboles",
            c: "Un mot de passe court avec des lettres",
            d: "Un mot de passe sans chiffres"
        },
        correctAnswer: "b"
    },
    {
        question: "Qu'est-ce qu'un honeypot ?",
        answers: {
            a: "Un piège conçu pour attirer et analyser les attaquants",
            b: "Un type de pare-feu avancé",
            c: "Un logiciel antivirus spécialisé",
            d: "Une base de données sécurisée"
        },
        correctAnswer: "a"
    },
    {
        question: "Qu'est-ce qu'un test de pénétration ?",
        answers: {
            a: "Une méthode d'évaluation des performances d'un réseau",
            b: "Une simulation d'attaque pour tester la sécurité d'un système",
            c: "Un processus de mise à jour d'un site web",
            d: "Une technique de sauvegarde de données"
        },
        correctAnswer: "b"
    },
    {
        question: "Quel est l'objectif principal d'un mot de passe ?",
        answers: {
            a: "Partager ses informations personnelles",
            b: "Protéger l'accès à ses comptes et données",
            c: "Se souvenir de ses comptes",
            d: "Rendre son ordinateur plus rapide"
        },
        correctAnswer: "b"
    },
    {
        question: "Que signifie 'hameçonnage' (phishing) ?",
        answers: {
            a: "Un jeu en ligne populaire",
            b: "Un moyen de sauvegarder ses données",
            c: "Une technique de piratage visant à obtenir des informations personnelles",
            d: "Un logiciel antivirus"
        },
        correctAnswer: "c"
    },
    {
        question: "Pourquoi est-il important de mettre à jour ses logiciels ?",
        answers: {
            a: "Pour éviter les bugs et corriger les failles de sécurité",
            b: "Pour installer plus de jeux",
            c: "Pour améliorer la vitesse de son ordinateur",
            d: "Pour réduire la consommation électrique"
        },
        correctAnswer: "a"
    },
    {
        question: "Qu'est-ce qu'une connexion Wi-Fi non sécurisée ?",
        answers: {
            a: "Une connexion qui nécessite un mot de passe",
            b: "Une connexion accessible à tous sans mot de passe",
            c: "Une connexion uniquement disponible dans les écoles",
            d: "Une connexion ultra rapide"
        },
        correctAnswer: "b"
    },
    {
        question: "Que faire si vous recevez un email suspect demandant vos informations personnelles ?",
        answers: {
            a: "Répondre rapidement pour éviter un problème",
            b: "Partager l'email avec vos amis",
            c: "Cliquer sur tous les liens pour en savoir plus",
            d: "Ne pas répondre et signaler l'email comme spam"
        },
        correctAnswer: "d"
    },
    {
        question: "Quel est le rôle d'un antivirus ?",
        answers: {
            a: "Supprimer tous les fichiers inutiles",
            b: "Empêcher, détecter et supprimer les logiciels malveillants",
            c: "Protéger contre les chocs électriques",
            d: "Améliorer la vitesse de navigation sur Internet"
        },
        correctAnswer: "b"
    },
    {
        question: "Qu'est-ce qu'un ransomware ?",
        answers: {
            a: "Un jeu vidéo en ligne",
            b: "Un outil pour protéger ses fichiers",
            c: "Un logiciel qui bloque vos données et demande une rançon",
            d: "Un virus qui ralentit votre ordinateur"
        },
        correctAnswer: "c"
    },
    {
        question: "Quelle est une bonne pratique pour créer un mot de passe sécurisé ?",
        answers: {
            a: "Utiliser une combinaison de lettres, chiffres et symboles",
            b: "Utiliser uniquement des chiffres",
            c: "Utiliser votre date de naissance",
            d: "Écrire '123456' car c'est facile à retenir"
        },
        correctAnswer: "a"
    },
    {
        question: "Pourquoi faut-il éviter de cliquer sur des liens inconnus ?",
        answers: {
            a: "Ils peuvent contenir des logiciels malveillants",
            b: "Ils ralentissent votre connexion Internet",
            c: "Ils ne fonctionnent jamais",
            d: "Ils augmentent la facture d'électricité"
        },
        correctAnswer: "a"
    },
    {
        question: "Que signifie HTTPS dans une adresse web ?",
        answers: {
            a: "Un site rapide",
            b: "Une connexion sécurisée entre vous et le site",
            c: "Une adresse non valide",
            d: "Un site hébergé en local"
        },
        correctAnswer: "b"
    },
    {
        question: "Qu'est-ce qu'un backdoor ?",
        answers: {
            a: "Une porte d'entrée pour les administrateurs",
            b: "Un outil pour contourner les contrôles de sécurité et accéder à un système",
            c: "Un type de firewall",
            d: "Une méthode de sauvegarde de données"
        },
        correctAnswer: "b"
    },
    {
        question: "Qu'est-ce que l'ingénierie sociale ?",
        answers: {
            a: "Manipuler des utilisateurs pour obtenir des informations sensibles",
            b: "Une méthode de cryptage des données",
            c: "Un type d'attaque réseau",
            d: "Un processus de sauvegarde sécurisé"
        },
        correctAnswer: "a"
    },
    {
        question: "Qu'est-ce qu'un mot de passe haché ?",
        answers: {
            a: "Un mot de passe crypté avec une clé publique",
            b: "Un mot de passe sauvegardé sous forme de texte clair",
            c: "Un mot de passe transformé en une valeur de longueur fixe grâce à une fonction de hachage",
            d: "Un mot de passe comportant des caractères spéciaux"
        },
        correctAnswer: "c"
    },
    {
        question: "Quel est le rôle de l'authentification multi-facteurs (MFA) ?",
        answers: {
            a: "Réduire le nombre de tentatives de connexion",
            b: "Fournir un second mot de passe",
            c: "Ajouter une couche de sécurité supplémentaire en exigeant plus d'un facteur d'authentification",
            d: "Permettre l'accès sans mot de passe"
        },
        correctAnswer: "c"
    },
    {
        question: "Que fait un antivirus ?",
        answers: {
            a: "Il empêche l'accès à certains sites web",
            b: "Il détecte et supprime les logiciels malveillants sur un système",
            c: "Il crypte les données sensibles",
            d: "Il analyse les performances du réseau"
        },
        correctAnswer: "b"
    },
    {
        question: "Qu'est-ce que l'attaque par injection SQL ?",
        answers: {
            a: "Une tentative d'injecter des malwares via des commandes SQL",
            b: "Une attaque consistant à insérer des requêtes SQL malveillantes pour exploiter des vulnérabilités",
            c: "Une méthode de chiffrement des bases de données",
            d: "Une forme d'attaque réseau"
        },
        correctAnswer: "b"
    },
    {
        question: "Quel est l'objectif d'un audit de sécurité ?",
        answers: {
            a: "Vérifier les performances des applications",
            b: "Analyser la sécurité d'un système pour identifier les vulnérabilités",
            c: "Déterminer la vitesse du réseau",
            d: "Tester les fonctionnalités d'une application"
        },
        correctAnswer: "b"
    },
    {
        question: "Qu'est-ce que le cryptojacking ?",
        answers: {
            a: "Une attaque consistant à miner des cryptomonnaies sur des machines infectées sans le consentement de l'utilisateur",
            b: "Un type de cryptage des données sensibles",
            c: "Une attaque visant à voler des clés privées de cryptomonnaies",
            d: "Un processus de vérification de la sécurité des transactions"
        },
        correctAnswer: "a"
    },
    {
        question: "Qu'est-ce que la gestion des identités et des accès (IAM) ?",
        answers: {
            a: "Un processus de cryptage des mots de passe",
            b: "Une méthode pour surveiller l'activité des utilisateurs sur un réseau",
            c: "Un cadre permettant de contrôler l'accès aux systèmes et de gérer les identités des utilisateurs",
            d: "Un système de gestion des sauvegardes"
        },
        correctAnswer: "c"
    },
    {
        question: "Quel est l'objectif principal du chiffrement ?",
        answers: {
            a: "Rendre les données lisibles par tous les utilisateurs",
            b: "Protéger les données contre l'accès non autorisé en les rendant illisibles",
            c: "Augmenter la vitesse de transmission des données",
            d: "Réduire la taille des fichiers"
        },
        correctAnswer: "b"
    },
    {
        question: "Qu'est-ce qu'une vulnérabilité zero-day ?",
        answers: {
            a: "Une vulnérabilité connue et corrigée",
            b: "Une vulnérabilité qui n'a pas encore été découverte ou corrigée par les développeurs",
            c: "Une vulnérabilité corrigée mais toujours exploitée",
            d: "Une vulnérabilité dans les outils de cryptage"
        },
        correctAnswer: "b"
    },
    {
        question: "Qu'est-ce qu'une attaque par force brute ?",
        answers: {
            a: "Une attaque utilisant un seul mot de passe pour tenter d'accéder à plusieurs systèmes",
            b: "Une méthode de chiffrement des fichiers",
            c: "Une attaque consistant à tester toutes les combinaisons possibles de mots de passe jusqu'à ce que le bon soit trouvé",
            d: "Une tentative de désactiver un pare-feu"
        },
        correctAnswer: "c"
    },
    {
        question: "Qu'est-ce qu'un certificat numérique ?",
        answers: {
            a: "Un fichier de sauvegarde",
            b: "Un fichier qui permet de vérifier l'identité d'une personne ou d'un site web sur internet",
            c: "Un type de virus informatique",
            d: "Une méthode de détection de menaces"
        },
        correctAnswer: "b"
    },
    {
        question: "Que fait l'attaque MITM (Man-in-the-Middle) ?",
        answers: {
            a: "Elle permet d'intercepter et de modifier la communication entre deux parties sans leur consentement",
            b: "Elle permet de crypter les données envoyées sur un réseau",
            c: "Elle sécurise les informations en ligne",
            d: "Elle permet d'accélérer la vitesse des réseaux"
        },
        correctAnswer: "a"
    },
    {
        question: "Qu'est-ce qu'une vulnérabilité de type Cross-Site Scripting (XSS) ?",
        answers: {
            a: "Une attaque permettant d'exécuter du code malveillant dans le navigateur d'un utilisateur",
            b: "Une attaque visant à détruire les bases de données",
            c: "Un type d'attaque par phishing",
            d: "Une méthode pour contourner le chiffrement des fichiers"
        },
        correctAnswer: "a"
    },
    {
        question: "Qu'est-ce que l'authentification unique (SSO) ?",
        answers: {
            a: "Un processus d'authentification nécessitant une seule authentification pour accéder à plusieurs applications",
            b: "Un processus permettant de gérer plusieurs mots de passe pour un utilisateur",
            c: "Un protocole pour garantir l'anonymat des utilisateurs",
            d: "Un processus qui exige un second mot de passe à chaque connexion"
        },
        correctAnswer: "a"
    },
    {
        question: "Qu'est-ce que le chiffrement asymétrique ?",
        answers: {
            a: "Un type de cryptage nécessitant une seule clé pour le chiffrement et le déchiffrement",
            b: "Un type de cryptage qui utilise une paire de clés (publique et privée) pour sécuriser les communications",
            c: "Un type de cryptage utilisé uniquement pour les fichiers texte",
            d: "Une méthode de détection des intrusions"
        },
        correctAnswer: "b"
    },
    {
        question: "Qu'est-ce qu'un fichier log ?",
        answers: {
            a: "Un fichier contenant des informations sur les connexions réseau et les activités du système",
            b: "Un fichier contenant des données sensibles à chiffrer",
            c: "Un fichier utilisé pour les sauvegardes",
            d: "Un type de programme de surveillance"
        },
        correctAnswer: "a"
    }
];
