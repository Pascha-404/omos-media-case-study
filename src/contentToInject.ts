import type { IInjectionBase, ITextInjection } from './types';

const textInjectionContent: ITextInjection[] = [
    {
        injectionType: 'text',
        selector: { attribute: 'data-pf-type', value: 'Paragraph3' },
        content: {
            original:
                'Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over <u>3,000 years</u> old and still perfectly edible. Also, the shortest war in history was between Britain and Zanzibar on<u> August 27, 1896</u>, lasting only 38 minutes. <br><br>Here’s another fun fact: Bananas are berries, but strawberries aren’t. And if you think that’s strange, consider this: A day on Venus is longer than a year on Venus. Finally, the inventor of the Frisbee was turned into a Frisbee after he died. Welcome to a world where the peculiar and the trivial reign supreme!',
            translation:
                'Wusstest du, dass Honig niemals verdirbt? Archäologen haben Töpfe mit Honig in alten ägyptischen Gräbern gefunden, die über <u>3.000 Jahre</u> alt sind und noch immer perfekt essbar sind. Außerdem war der kürzeste Krieg in der Geschichte zwischen Großbritannien und Sansibar am <u>27. August 1896</u> und dauerte nur 38 Minuten. <br><br>Hier ist noch eine interessante Tatsache: Bananen sind Beeren, aber Erdbeeren sind es nicht. Und wenn du das seltsam findest, bedenke dies: Ein Tag auf der Venus ist länger als ein Jahr auf der Venus. Schließlich wurde der Erfinder des Frisbees nach seinem Tod in einen Frisbee verwandelt. Willkommen in einer Welt, in der das Kuriose und das Triviale herrschen!',
        },
    },
    {
        injectionType: 'text',
        selector: { attribute: 'data-pf-type', value: 'Heading2' },
        content: {
            original: '<b>Lose Weight Without Deprivation</b>',
            translation: '<b>Abnehmen ohne Verzicht</b>',
        },
    },
    {
        injectionType: 'text',
        selector: { attribute: 'data-pf-type', value: 'Paragraph3' },
        content: {
            original:
                "<strong>Enjoyment is a must when losing weight</strong> <br>- that's why deprivation is NOT a cornerstone of the MetaFlow concept. The creamy shakes are only part of your diet, and on most days, you can eat what you want. This keeps your metabolism fast and makes weight loss easier.<br><br><b>Convenient &amp; Affordable <br></b>Cooking yourself takes time - and eating out is expensive. The MetaFlow Metabolism Shake solves this problem: Starting at $1.99 per meal, the shake is not only quick to prepare but also easy on your wallet.<br><br><strong>Metabolism Approach Developed by Experts<br></strong>Numerous vitamins and nutrients such as iron, magnesium, and vitamin C contribute to normal energy metabolism. Additional micronutrients that comprehensively support your metabolic processes and facilitate weight loss are also included.<br><br><strong>Different from Weight Loss Shakes<br></strong>There are countless sugary meal replacement shakes out there. We do things differently: The MetaFlow Metabolism Shake impresses with less than 1 gram of sugar and 23 grams of protein per serving. This keeps you full and properly nourished! Plus, the holistic concept prevents any yo-yo effect.",
            translation:
                '<strong>Genuss ist ein Muss beim Abnehmen</strong> <br>- deshalb ist Verzicht NICHT der Eckpfeiler des MetaFlow-Konzepts. Die cremigen Shakes sind nur ein Teil deiner Ernährung, und an den meisten Tagen kannst du essen, was du möchtest. Dies hält deinen Stoffwechsel schnell und macht das Abnehmen einfacher.<br><br><b>Bequem &amp; Erschwinglich <br></b>Selbst kochen braucht Zeit - und auswärts essen ist teuer. Der MetaFlow Metabolism Shake löst dieses Problem: Ab 1,99€ pro Mahlzeit ist der Shake nicht nur schnell zubereitet, sondern auch schonend für den Geldbeutel.<br><br><strong>Von Experten entwickelter Stoffwechselansatz<br></strong>Zahlreiche Vitamine und Nährstoffe wie Eisen, Magnesium und Vitamin C tragen zu einem normalen Energiestoffwechsel bei. Zusätzlich sind weitere Mikronährstoffe enthalten, die deine Stoffwechselprozesse umfassend unterstützen und das Abnehmen erleichtern.<br><br><strong>Anders als Abnehmshakes<br></strong>Es gibt unzählige zuckerhaltige Mahlzeitenersatzshakes. Wir machen es anders: Der MetaFlow Metabolism Shake beeindruckt mit weniger als 1 Gramm Zucker und 23 Gramm Protein pro Portion. Dies hält dich satt und richtig ernährt! Außerdem verhindert das ganzheitliche Konzept jeden Jo-Jo-Effekt.',
        },
    },
    {
        injectionType: 'text',
        selector: { attribute: 'data-pf-type', value: 'Heading2' },
        content: {
            original: 'Same day delivery if you ordet till:',
            translation: 'Lieferung am selben Tag, wenn Sie bestellen bis:',
        },
    },
    {
        injectionType: 'text',
        selector: { attribute: 'data-pf-type', value: 'Heading2' },
        content: {
            original: 'Chose your quantity:',
            translation: 'Wählen Sie Ihre Menge:',
        },
    },
];

const buttonInjectionContent: ITextInjection[] = [
    {
        injectionType: 'text',
        selector: { attribute: 'name', value: 'add' },
        content: { original: 'Add to Cart', translation: 'In den Warenkorb' },
        newAttributes: {
            ['data-soldout']: 'Ausverkauft',
            ['data-adding']: 'Füge hinzu...',
            ['data-added']: 'Dankeschön!',
        },
    },
];

const dateTimeInjectionContent: IInjectionBase[] = [
    {
        injectionType: 'dateTime',
        selector: { attribute: 'id', value: 'current-date-time' },
    },
];

export { textInjectionContent, buttonInjectionContent, dateTimeInjectionContent };
