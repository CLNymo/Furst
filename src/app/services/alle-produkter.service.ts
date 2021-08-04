import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlleProdukterService {
  constructor(){}

  // produkter grupperes i arrays på bunnen av dokumentet

  
  v1 = {
    produktnavn: 'Gelrør (SST), serum',
    beskrivelse: 'Gul-orange propp.',
    produktbilde: 'v1.jpg'
  }
  
  v2 = {
    produktnavn: 'Rør uten tilsetning',
    beskrivelse: 'Til prøvetaking for serumanalyser (legemidler). Rød propp.',
    produktbilde: 'v2.jpg'
  }
  
  v3 = {
    produktnavn: 'EDTA-rør',
    beskrivelse: 'Hematologiske analyser og HbA1c. Lilla propp.',
    produktbilde: 'v3.jpg'
  }
  
  v4 = {
    produktnavn: 'Plastrør med skrukork',
    beskrivelse: 'Til forsendelse av serum/plasma.',
    produktbilde: 'v4.jpg'
  }
  
  s1 = {
    produktnavn: 'HCY, PTH og MMA, EDTA-rør med gel',
    beskrivelse: 'Homocystein, PTH og MMA. Gråhvit propp. Spesiell prøvetakingsprosedyre.',
    produktbilde: 's1.jpg'
  }
  
  s2 = {
    produktnavn: 'Heparinrør med gel, spormetaller',
    beskrivelse: 'Sink, selen, kobber og aluminium. Lys grønn propp med gul ring.',
    produktbilde: 's2.jpg'
  }
  
  s3 = {
    produktnavn: 'Heparinrør, tungmetaller',
    beskrivelse: 'Bly, kadmium og kvikksølv. Mørk grønn propp.',
    produktbilde: 's3.jpg'
  }
  
  s4 = {
    produktnavn: 'Citratrør',
    beskrivelse: 'Koagulasjonsanalyser (INR). Lys blå propp.',
    produktbilde: 's4.jpg'
  }
  
  s5 = {
    produktnavn: 'Urinanalyser',
    beskrivelse: 'Vakuumrør med gul propp uten tilsetning. (10mL).',
    produktbilde: 's5.jpg'
  }
  
  s6 = {
    produktnavn: 'Rør til Kalprotectin i feces',
    beskrivelse: 'Plastrør (med skje), med hylse.',
    produktbilde: 's6.jpg'
  }
  
  m1 = {
    produktnavn: 'Pensel til SOI',
    beskrivelse: 'Aptima Multitest Swab - til seksuelt overførbare infeksjoner.',
    produktbilde: 'm1.jpg'
  }
  
  m2 = {
    produktnavn: 'Urinrør til SOI',
    beskrivelse: 'Aptima Urinrør - til seksuelt overførbare infeksjoner.',
    produktbilde: 'm2.jpg'
  }
  
  m3 = {
    produktnavn: 'Rør med borsyre - Olivengrønn propp',
    beskrivelse: 'Oppsugningsadapter og forsendelsesrør med borsyre. Benyttes til dyrkningsprøver i urin.',
    produktbilde: 'm3.jpg'
  }
  
  m4 = {
    produktnavn: 'Hvit/rosa/lilla propp - Eswab (Amies transportmedium)',
    beskrivelse: 'Pensel i normal størrelse. Benyttes til nese, hals, vagina og sår. NB! Rektum for ESBL og VRE-screening',
    produktbilde: 'm4.jpg'
  }
  
  m5 = {
    produktnavn: 'Orange propp - Eswab (Amies transportmedium)',
    beskrivelse: 'Pensel i tynn størrelse. Benyttes til øye, øre, nesegang, hals, sår, urinveier og pediatriske prøver.',
    produktbilde: 'm5.jpg'
  }
  
  m6 = {
    produktnavn: 'Blå propp - Eswab (Amies transportmedium)',
    beskrivelse: 'Lang, tynn pensel. Benyttes til nasopharynx prøver.',
    produktbilde: 'm6.jpg'
  }
  
  m7 = {
    produktnavn: 'Grønn propp - FecalSwab (Cary Blair medium)',
    beskrivelse: '2 mL Cary Blair medium. Pensel i normal størrelse. Benyttes til PCR av parasitter/bakterier/virus og dyrkningsprøver i feces.',
    produktbilde: 'm7.jpg'
  }
  
  m8 = {
    produktnavn: 'Plastrør til dermatofytter - 7 mL',
    beskrivelse: 'Plastrør med skrukork til dermatofytter (sopp). Benyttes til hår, negl- og hudavskrap.',
    produktbilde: 'm8.jpg'
  }
  
  ne1 = {
    produktnavn: 'Nåler, Grønne (21Gx1,5")',
    beskrivelse: 'Sikkerhetskanyler for prøvetaking i vakuumrør.',
    produktbilde: 'none'
  }
  
  ne2 = {
    produktnavn: 'Nåler, Sorte (22Gx1")',
    beskrivelse: 'Sikkerhetskanyler for prøvetaking i vakuumrør.',
    produktbilde: 'none'
  }
  
  ne3 = {
    produktnavn: 'Nåleholder for vakuumrør',
    beskrivelse: 'Gul flergangsholder.',
    produktbilde: 'none'
  }
  
  ne4 = {
    produktnavn: 'Hylser til forsendelse',
    beskrivelse: 'Godkjente plasthylser. Hver hylse tar 1 rør.',
    produktbilde: 'none'
  }
  
  ne5 = {
    produktnavn: 'Transportcontainere til flyfrakt',
    beskrivelse: 'Gjelder rekvirenter med henteavtale.',
    produktbilde: 'none'
  }
  
  ne6 = {
    produktnavn: 'Hvite konvolutter til rekvisisjoner',
    beskrivelse: 'Til forsendelse av rekvisisjoner sammen med flycontainere.',
    produktbilde: 'none'
  }
  
  ne7 = {
    produktnavn: 'Emballasje til blodutstryk',
    beskrivelse: 'Plastesker som hver tar 2 blodutstryk.',
    produktbilde: 'none'
  }
  
  f1 = {
    produktnavn: 'Brune frankerte konvolutter biologisk stoff',
    beskrivelse: 'Vanlig postforsendelse. Kan benyttes til prøver med holdbarhet > 5 dager i romtemperatur, vekt inntil 350 gram.',
    produktbilde: 'none'
  }
  
  f2 = {
    produktnavn: 'Hvite ekspress over-natt konvolutter biologisk stoff',
    beskrivelse: 'Til prøver med kort holdbarhet, eller etter avtale. Skal ikke benyttes fredager. Vekt inntil 4 kg.(For legekontor som ikke har daglig henting fra Fürst).',
    produktbilde: 'none'
  }
  
  f3 = {
    produktnavn: 'Brune budkonvolutter',
    beskrivelse: 'For henting med bud (gjelder legekontor som ikke bruker stativ).',
    produktbilde: 'none'
  }
  
  f4 = {
    produktnavn: 'Hvite konvolutter til rekvisisjoner',
    beskrivelse: 'Kun ved flyfrakt.',
    produktbilde: 'none'
  }
  
  r1 = {
    produktnavn: 'Følgeskriv Fürst Forum',
    beskrivelse: 'Til elektronisk rekvirering via Fürst Forum',
    produktbilde: 'r1.jpg'
  }
  
  r2 = {
    produktnavn: 'Patologi følgeskriv til Fürst Forum (etter avtale)',
    beskrivelse: 'Til elektronisk rekvirering via Fürst Forum',
    produktbilde: 'r2.jpg'
  }
  
  r3 = {
    produktnavn: 'Hovedrekvisisjon (klinisk kjemi)',
    beskrivelse: '(Ikke elektronisk rekvirering)',
    produktbilde: 'r3.jpg'
  }
  
  r4 = {
    produktnavn: 'Allergi',
    beskrivelse: ' ',
    produktbilde: 'r4.jpg'
  }
  
  r5 = {
    produktnavn: 'Fordøyelsessykdommer',
    beskrivelse: ' ',
    produktbilde: 'r5.jpg'
  }
  
  r6 = {
    produktnavn: 'Legemidler og rusmidler',
    beskrivelse: ' ',
    produktbilde: 'r6.jpg'
  }
  
  r7 = {
    produktnavn: 'Dyrkning/mikroskopi',
    beskrivelse: ' ',
    produktbilde: 'r7.jpg'
  }
  
  r8 = {
    produktnavn: 'Molekylærbiologi/PCR',
    beskrivelse: ' ',
    produktbilde: 'r8.jpg'
  }
  
  r9 = {
    produktnavn: 'ESBL/MRSA/VRE-screening',
    beskrivelse: 'Kun for bruk i institusjoner',
    produktbilde: 'r9.jpg'
  }
  
  r10 = {
    produktnavn: 'Cytologi',
    beskrivelse: ' ',
    produktbilde: 'r10.jpg'
  }
  
  r11 = {
    produktnavn: 'Histologi',
    beskrivelse: ' ',
    produktbilde: 'r11.jpg'
  }
  
  t1 = {
    produktnavn: 'Kalender 2021',
    beskrivelse: 'A4 format',
    produktbilde: 'none'
  }
  
  t2 = {
    produktnavn: 'Furstpasient.no kort.',
    beskrivelse: 'Kort med info om www.furstpasient.no for utdeling til pasienter',
    produktbilde: 'none'
  }
  
  t3 = {
    produktnavn: 'Furstpasient.no plakat',
    beskrivelse: 'Til oppheng for info om www.furstpasient.no på f.eks venterom/resepsjon',
    produktbilde: 'none'
  }
  
  t4 = {
    produktnavn: 'Prøvetakingsmesteren - kom i gang kort',
    beskrivelse: 'Prøvetakingsmesteren er et læringsspill om blodprøvetaking spesielt laget for medarbeidere ved legekontor og for studenter',
    produktbilde: 'none'
  }
  
  t5 = {
    produktnavn: 'Veiledning til den elektroniske Blåboka',
    beskrivelse: 'Blåboka foreligger nå KUN i elektronisk utgave. Last ned veiledningshefte her (pdf).',
    produktbilde: 'All informasjonen fra boka er til enhver tid oppdatert og tilgjengelig på våre nettsider. Se analyse og klinikk.'
  }
  
  t6 = {
    produktnavn: 'Referanseområder, folder',
    beskrivelse: 'Denne utgis ikke lenger i papirformat.',
    produktbilde: 'Link til referanseområder her.'
  }
  
  t7 = {
    produktnavn: 'Gode arbeidsrutiner - lommeformat',
    beskrivelse: 'Lommefolder med tapperekkefølge og veiledning til prøvetaking. Trykk her for pdf.',
    produktbilde: 'none'
  }
  
  t8 = {
    produktnavn: 'Retningslinjer for prøvetaking til litiumanalyse',
    beskrivelse: ' ',
    produktbilde: 'none'
  }
  
  t9 = {
    produktnavn: 'Skjema for kvalitetsvurdering',
    beskrivelse: ' ',
    produktbilde: 'none'
  }
  
  t10 = {
    produktnavn: 'Analysevariasjonstabell',
    beskrivelse: 'Analytisk og biologisk variasjon for de enkelte analyser.',
    produktbilde: ''
  }
  
  t11 = {
    produktnavn: 'Fremgangsmåte for å lage blodutstryk',
    beskrivelse: ' ',
    produktbilde: 'none'
  }
  
  t12 = {
    produktnavn: 'Temahefte 01- Glandula thyreoidea',
    beskrivelse: 'Utredning og oppfølging av funksjonsforstyrrelser',
    produktbilde: 'none'
  }
  
  t13 = {
    produktnavn: 'Temahefte 02 - Den gravide og laboratoriet',
    beskrivelse: 'Referanseverdier - infeksjoner i svangerskapet',
    produktbilde: 'none'
  }
  
  t14 = {
    produktnavn: 'Temahefte 03 - Mage-tarm-kanalen',
    beskrivelse: 'Utredning og oppfølging av plager i fordøyelsessystemet',
    produktbilde: 'none'
  }
  
  t15 = {
    produktnavn: 'Temahefte 04 - Allergi og laboratoriet',
    beskrivelse: 'Allergiutredning - Serologisk testing',
    produktbilde: 'none'
  }
  
  t16 = {
    produktnavn: 'Temahefte 05 - Gode rutiner ved prøvetaking',
    beskrivelse: 'Anbefalinger og praktiske tips for rekvirering, tapping og merking av prøver til laboratoriet',
    produktbilde: 'none'
  }
  
  t17 = {
    produktnavn: 'Temahefte 06 - Seksuelt overførbare infeksjoner',
    beskrivelse: 'Diagnostikk og behandling',
    produktbilde: 'none'
  }
  
  t18 = {
    produktnavn: 'Temahefte 07 - Rusmidler og Rusmiddelbruk',
    beskrivelse: 'Rusmiddelanalyser og hvordan tolke svarene',
    produktbilde: 'none'
  }
  
  t19 = {
    produktnavn: 'Blåpermer til Fürst Info',
    beskrivelse: 'A5 permer til arkivering av informasjon fra Fürst.',
    produktbilde: 'none'
  }
  
  a1 = {
    produktnavn: 'Kanyleboks',
    beskrivelse: '2,8 liter',
    produktbilde: 'none'
  }
  
  a2 = {
    produktnavn: 'Doble etiketter til Forum',
    beskrivelse: 'Doble etiketter til bruk ved elektronisk rekvirering.',
    produktbilde: 'none'
  }
  
  a3 = {
    produktnavn: 'Enkle etiketter til Forum',
    beskrivelse: 'Enkle etiketter til bruk ved elektronisk rekvirering.',
    produktbilde: 'none'
  }
  
  p1 = {
    produktnavn: 'Plastspatler',
    beskrivelse: 'Til væskebasert cytologi.',
    produktbilde: 'p1.jpg'
  }
  
  p2 = {
    produktnavn: 'Rovers Cervex Brush (kun til væskebasert cytologi)',
    beskrivelse: ' ',
    produktbilde: 'p2.jpg'
  }
  
  p3 = {
    produktnavn: 'ThinPrep - til HPV og væskebasert cytologi',
    beskrivelse: 'Inkl. hylse og absorberende materiale',
    produktbilde: 'p3.jpg'
  }
  
  p4 = {
    produktnavn: 'Fikseringsvæske cytologi',
    beskrivelse: 'Flaske med 100mL.',
    produktbilde: 'none'
  }
  
  p5 = {
    produktnavn: 'Cytologiske børster; cervibrush',
    beskrivelse: 'Obs! IKKE til væskebasert cytologi.',
    produktbilde: 'p5.jpg'
  }
  
  p6 = {
    produktnavn: 'Objektglass',
    beskrivelse: ' ',
    produktbilde: 'none'
  }
  
  p7 = {
    produktnavn: 'Transportesker til objektsglass',
    beskrivelse: ' ',
    produktbilde: 'none'
  }
  
  p8 = {
    produktnavn: 'Prøveglass til histologi',
    beskrivelse: 'Inkl. hylse og absorberende materiale.',
    produktbilde: 'p8.jpg'
  }
  
  o1 = {
    produktnavn: 'Periodontitt',
    beskrivelse: 'Prøvetakings- og forsendelsesutstyr, rekvisisjon og konvolutt.',
    produktbilde: 'none'
  }
  
  o2 = {
    produktnavn: 'Sopp og bakteriologi',
    beskrivelse: 'Pensel, transporthylse, rekvisisjon og konvolutt.',
    produktbilde: 'none'
  }
  
  o3 = {
    produktnavn: 'Biopsier',
    beskrivelse: 'Prøveglass, transporthylse, rekvisisjon og konvolutt.',
    produktbilde: 'none'
  }

  vanligeRor: any[] = [this.v1, this.v2, this.v3, this.v4];
  spesialror: any[] = [this.s1, this.s2, this.s3, this.s4, this.s5, this.s6];
  mikrobiologi: any[] = [this.m1, this.m2, this.m3, this.m4, this.m5, this.m6, this.m7, this.m8];
  nalerOgEmballasje: any[] = [this.ne1, this.ne2, this.ne3, this.ne4, this.ne5, this.ne6, this.ne7];
  forsendelseskonvolutter: any[] = [this.f1, this.f2, this.f3, this.f4];
  rekvisisjoner: any[] = [this.r1, this.r2, this.r3, this.r4, this.r5, this.r6, this.r7, this.r8, this.r9, this.r10, this.r11];
  trykksaker: any[] = [this.t1, this.t2, this.t3, this.t4, this.t5, this.t6, this.t7, this.t8, this.t9, this.t10, this.t11, this.t12, this.t13, this.t14, this.t15, this.t16, this.t17, this.t18, this.t19];
  patologi: any[] = [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6, this.p7, this.p8];
  odontologi: any[] = [this.o1, this.o2, this.o3];
  annet: any[] = [this.a1, this.a2, this.a3];
}
  