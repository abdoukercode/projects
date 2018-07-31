const john = {
    name: 'spider',
    birthday: new Date(16,04,2000)
}

const translated = translate`
<div>
${'t.hello'} ${john.name}, ${'t.yourBirthdayIs'} ${john.birthday}
</div>
`

console.log('translated:', translated);

function translate(literalStrings,...interpolations) {
    let translations = getTranslations('de')
    return literalStrings.reduce((fullstring, literal,index) => {
        let interpolation =String( interpolations[index] || '')
        if(interpolation.startsWith('t.')){
            interpolation = translations[interpolation.slice(2)]
        }
        return `${fullstring}${literal}${interpolation}`
    }, '')
    
} 
/* 
function tag(literalStrings,...interpolations) {
    return literalStrings.reduce((fullstring, literal,index) => {
        const interpolation = interpolations[index] || ''
        return `${fullstring}${literal}${interpolation}`
    }, '')
    
} */

function getTranslations(lang){
    switch (lang ) {
        case 'en':
            return {
                hello: 'Hello',
                yourBirthdayIs: 'your birthday is'
            }
            break;
        case 'fr':
            return {
                hello: 'Salut',
                yourBirthdayIs: 'ta date de naissance est'
            }
            break;
    
        default:
        return {
            hello: '>> oops language not supported 😋 <<',
            yourBirthdayIs: '>> oops language not supported 😋 <<'
        }
            break;
    }
}



