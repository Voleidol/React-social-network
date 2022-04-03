let a = {
    num: 8,
    bool: true,
    str:'https',
    mass: ['Dima', 'Roma', 'Sasha'],
    classroom: {
        teach: {
            name: 'new',
            age: 18
        }
    }
}

let b = {...a}
b.classroom = {...a.classroom}
b.classroom.teach = {...a.classroom.teach}
b.mass = [...a.mass]
b.classroom.teach.name = 'ambasador'
b.mass.push('Julia')
console.log(a)
console.log(b)