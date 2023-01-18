const _form = document.querySelector('.form')
const _amount = document.getElementById('amount')
const _total = document.getElementById('total')
const _btn1 = document.getElementById('btn1')
const _btn2 = document.getElementById('btn2')
const _btn3 = document.getElementById('btn3')
const _btn4 = document.getElementById('btn4')
const _btn5 = document.getElementById('btn5')
const _btn6 = document.getElementById('btn6')
const _reset = document.getElementById('reset')
let _billInput = document.querySelector('.bill-input')
let _peopleInput = document.querySelector('.people-input')



_btn1.addEventListener('change', e => {
    e.preventDefault()
    let tip = e.target.value
    let result = Number(_billInput.value) + (Number(_billInput.value) * (tip / 100))

    if(Number(_peopleInput.value) != 0){
        _amount.textContent = `
            $${countSum(Number(_billInput.value), tip, Number(_peopleInput.value))}
        `

        _total.textContent = `$${result.toFixed(2)}`
    } else {
        document.querySelector('.message').style.display = 'block'
        document.querySelector('.people-input').style.border = '2px solid red'
        setTimeout((e) => {
            document.querySelector('.message').style.display = 'none'
            document.querySelector('.people-input').style.border = '2px solid transparent'
        }, 3000)
    }
})

_btn2.addEventListener('change', e => {
    e.preventDefault()
    let tip = e.target.value
    let result = Number(_billInput.value) + (Number(_billInput.value) * (tip / 100))

    if(Number(_peopleInput.value) != 0){
        _amount.textContent = `
            $${countSum(Number(_billInput.value), tip, Number(_peopleInput.value))}
        `

        _total.textContent = `$${result.toFixed(2)}`
    } else {
        document.querySelector('.message').style.display = 'block'
        document.querySelector('.people-input').style.border = '2px solid red'
        setTimeout((e) => {
            document.querySelector('.message').style.display = 'none'
            document.querySelector('.people-input').style.border = '2px solid transparent'
        }, 3000)
    }
})

_btn3.addEventListener('change', e => {
    e.preventDefault()
    let tip = e.target.value
    let result = Number(_billInput.value) + (Number(_billInput.value) * (tip / 100))

    if(Number(_peopleInput.value) != 0){
        _amount.textContent = `
            $${countSum(Number(_billInput.value), tip, Number(_peopleInput.value))}
        `

        _total.textContent = `$${result.toFixed(2)}`
    } else {
        document.querySelector('.message').style.display = 'block'
        document.querySelector('.people-input').style.border = '2px solid red'
        setTimeout((e) => {
            document.querySelector('.message').style.display = 'none'
            document.querySelector('.people-input').style.border = '2px solid transparent'
        }, 3000)
    }
})

_btn4.addEventListener('change', e => {
    e.preventDefault()
    let tip = e.target.value
    let result = Number(_billInput.value) + (Number(_billInput.value) * (tip / 100))

    if(Number(_peopleInput.value) != 0){
        _amount.textContent = `
            $${countSum(Number(_billInput.value), tip, Number(_peopleInput.value))}
        `

        _total.textContent = `$${result.toFixed(2)}`
    } else {
        document.querySelector('.message').style.display = 'block'
        document.querySelector('.people-input').style.border = '2px solid red'
        setTimeout((e) => {
            document.querySelector('.message').style.display = 'none'
            document.querySelector('.people-input').style.border = '2px solid transparent'
        }, 3000)
    }
})

_btn5.addEventListener('change', e => {
    e.preventDefault()
    let tip = e.target.value
    let result = Number(_billInput.value) + (Number(_billInput.value) * (tip / 100))

    if(Number(_peopleInput.value) != 0){
        _amount.textContent = `
            $${countSum(Number(_billInput.value), tip, Number(_peopleInput.value))}
        `

        _total.textContent = `$${result.toFixed(2)}`
    } else {
        document.querySelector('.message').style.display = 'block'
        document.querySelector('.people-input').style.border = '2px solid red'
        setTimeout((e) => {
            document.querySelector('.message').style.display = 'none'
            document.querySelector('.people-input').style.border = '2px solid transparent'
        }, 3000)
    }
})

_btn6.addEventListener('change', e => {
    e.preventDefault()
    let tip = e.target.value
    let result = Number(_billInput.value) + (Number(_billInput.value) * (tip / 100))

    if(Number(_peopleInput.value) != 0){
        _amount.textContent = `
            $${countSum(Number(_billInput.value), tip, Number(_peopleInput.value))}
        `

        _total.textContent = `$${result.toFixed(2)}`
    } else {
        document.querySelector('.message').style.display = 'block'
        document.querySelector('.people-input').style.border = '2px solid red'
        setTimeout((e) => {
            document.querySelector('.message').style.display = 'none'
            document.querySelector('.people-input').style.border = '2px solid transparent'
        }, 3000)
    }
})




function countSum(bill, tip, value){
    let _bill = Number(bill)
    let _tip = Number(tip)
    let _value = Number(value)

    let result = (_bill + (_bill * (_tip / 100))) / _value

    console.log(`${result}$`);
    return result.toFixed(2)
}

_reset.addEventListener('click', e => {
    e.preventDefault()
    
    _billInput.value = ''
    _peopleInput.value = ''
    _amount.textContent = '$0.00'
    _total.textContent = '$0.00'
})