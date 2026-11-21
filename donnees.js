// FaceàFace2027 — données partagées entre les pages
// Pour modifier un candidat ou un thème, il suffit de changer ce fichier.

const CANDIDATS = [
  { id: 'branco', nom: 'Juan Branco', age: 37, parti: 'Les Ruches', photo: 'branco.jpg', credit: 'Web Summit (à vérifier)',
    bio: '37 ans\nAvocat\nCandidat soutenu par le mouvement « Les Ruches »', programme: 'https://juan-branco.fr' },
  { id: 'roussel', nom: 'Fabien Roussel', age: 57, parti: 'PCF', photo: 'roussel.jpg', credit: 'Zouhair Nakara',
    bio: 'Secrétaire national du PCF\nMaire de Saint-Amand-les-Eaux\nAncien député' },
  { id: 'melenchon', nom: 'Jean-Luc Mélenchon', age: 75, parti: 'La France insoumise', photo: 'melenchon.jpg', credit: 'Wikimedia Commons',
    bio: 'Fondateur de La France insoumise', programme: 'https://melenchon2027.fr' },
  { id: 'ruffin', nom: 'François Ruffin', age: 51, parti: 'Debout !', photo: 'ruffin.jpg', credit: 'Thinkerview',
    bio: 'Député de la Somme\nJournaliste' },
  { id: 'tondelier', nom: 'Marine Tondelier', age: 40, parti: 'Les Écologistes', photo: 'tondelier.jpg', credit: 'Selbymay',
    bio: 'Secrétaire nationale des Écologistes\nConseillère régionale des Hauts-de-France' },
  { id: 'glucksmann', nom: 'Raphaël Glucksmann', age: 47, parti: 'Place publique', photo: 'glucksmann.jpg', credit: 'Parlement européen',
    bio: 'Député européen\nCoprésident de Place publique\nEssayiste, ancien journaliste' },
  { id: 'bouamrane', nom: 'Karim Bouamrane', age: 53, parti: 'La France humaine et forte', photo: 'bouamrane.jpg', credit: 'Wikimedia Commons',
    bio: 'Maire de Saint-Ouen-sur-Seine\nVice-président du conseil départemental de la Seine-Saint-Denis' },
  { id: 'polony', nom: 'Natacha Polony', age: 51, parti: 'Sans étiquette', photo: 'polony.jpg', credit: 'Georges Biard',
    bio: 'Journaliste et essayiste\nÉditorialiste, chroniqueuse et présentatrice audiovisuelle' },
  { id: 'attal', nom: 'Gabriel Attal', age: 37, parti: 'Renaissance', photo: 'attal.jpg', credit: 'Ismail Aissoub',
    bio: 'Secrétaire général de Renaissance (anciennement En Marche)\nAncien Premier ministre\nAncien porte-parole du gouvernement' },
  { id: 'philippe', nom: 'Édouard Philippe', age: 55, parti: 'Horizons', photo: 'philippe.jpg', credit: 'Wikimedia Commons',
    bio: 'Maire du Havre\nAncien Premier ministre\nPrésident du parti Horizons' },
  { id: 'lisnard', nom: 'David Lisnard', age: 57, parti: 'Nouvelle Énergie', photo: 'lisnard.jpg', credit: 'Grégor Sauvagère',
    bio: 'Maire de Cannes\nPrésident de l’Association des maires de France (AMF)' },
  { id: 'retailleau', nom: 'Bruno Retailleau', age: 65, parti: 'Les Républicains', photo: 'retailleau.jpg', credit: 'Anthony Montardy',
    bio: 'Président des Républicains\nSénateur de la Vendée\nAncien ministre de l’Intérieur' },
  { id: 'dupontaignan', nom: 'Nicolas Dupont-Aignan', age: 65, parti: 'Debout la France', photo: 'dupontaignan.jpg', credit: 'Source à préciser',
    bio: 'Maire de Yerres\nPrésident de Debout la France\nAncien député' },
  { id: 'lepen', nom: 'Marine Le Pen', age: 58, parti: 'Rassemblement national', photo: 'lepen.jpg', credit: 'Vox España',
    bio: 'Présidente du groupe Rassemblement national à l’Assemblée nationale\nAncienne présidente du Rassemblement national' },
  { id: 'zemmour', nom: 'Éric Zemmour', age: 68, parti: 'Reconquête', photo: 'zemmour.jpg', credit: 'Anh de France',
    bio: 'Président de Reconquête\nEssayiste\nAncien éditorialiste' }
];

const THEMES = [
  { id: 'energie', titre: 'Énergie', desc: 'Nucléaire, renouvelables, prix de l’énergie',
    icone: 'M13 2L4 14h7l-1 8 9-12h-7z' },
  { id: 'ecologie', titre: 'Écologie', desc: 'Climat, biodiversité, transports, agriculture',
    icone: 'M5 19c0-8 6-14 14-14 0 8-6 14-14 14zM5 19l8-8' },
  { id: 'budget', titre: 'Budget', desc: 'Dette, impôts, dépenses publiques',
    icone: 'M3 7h18v12H3zM3 11h18M16 15h2' },
  { id: 'retraites', titre: 'Retraites', desc: 'Âge de départ, financement, pensions',
    icone: 'M6 3h12M6 21h12M7 3c0 6 10 6 10 9s-10 3-10 9M17 3c0 6-10 6-10 9s10 3 10 9' },
  { id: 'securite-justice', titre: 'Sécurité et justice', desc: 'Police, délinquance, tribunaux, prisons',
    icone: 'M12 3v18M7 21h10M5 7h14M5 7l-3 6a3 3 0 006 0zM19 7l-3 6a3 3 0 006 0z' },
  { id: 'international', titre: 'Diplomatie / International', desc: 'Défense, Europe, relations internationales',
    icone: 'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18' },
  { id: 'sante', titre: 'Santé', desc: 'Hôpital, déserts médicaux, dépendance',
    icone: 'M12 5v14M5 12h14' },
  { id: 'education', titre: 'Éducation', desc: 'École, université, apprentissage',
    icone: 'M3 5h7a2 2 0 012 2v12a2 2 0 00-2-2H3zM21 5h-7a2 2 0 00-2 2v12a2 2 0 012-2h7z' },
  { id: 'industrie', titre: 'Politique industrielle', desc: 'Industrie, réindustrialisation, emploi',
    icone: 'M3 21V10l6 4V10l6 4V6l6 4v11zM3 21h18' },
  { id: 'social', titre: 'Social', desc: 'Pouvoir d’achat, salaires, aides sociales, logement',
    icone: 'M9 11a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 3-5 6-5s6 2 6 5M16 5a3 3 0 010 6M18 15c2 .5 3 2.2 3 5' },
  { id: 'immigration', titre: 'Immigration', desc: 'Entrées, asile, intégration',
    icone: 'M3 12h13M12 7l5 5-5 5M20 4v16' },
  { id: 'institutions', titre: 'Institutions', desc: 'Constitution, référendum, mode de scrutin',
    icone: 'M3 20h18M4 10h16M12 4l8 6H4zM7 10v10M12 10v10M17 10v10' }
];

function echapper(t) {
  return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
