document.addEventListener('DOMContentLoaded', (event) => {
    const formDomEl = document.querySelector('#test_form')
    const formSubmitButtonEl = formDomEl.querySelector('button')

    // Select the field using any of these syntaxes:
    // (by name)
    const firstNameDomEl = formDomEl.elements['nm_first_name']
    const lastNameDomEl = formDomEl.elements['nm_last_name']
    const ageDomEl = formDomEl.elements['nm_age_num']
    const secretCodeDomEl = formDomEl.elements['nm_secret_code']

    function TestFormData () {
        formSubmitButtonEl.addEventListener('click', (e) => {
            e.preventDefault()
            const formData = new FormData(formDomEl);
            for (const [key, value] of formData) {
                console.log(`'${key}'::'${value}'`)
            }
            submitFormWithFormDataObject(formData)
        })
    }

    function TestDifferentEncodingTypes () {

    }

    // ==============
    TestFormData()
    // TestDifferentEncodingTypes()

    // =============
    async function submitFormWithFormDataObject (formData) {
        formData.append('extra_field', 'set programmatically')

        const response = await fetch('./api/submitformwithformdataobj', {
            method: 'POST',
            body: formData
        }) 

        console.log({ response })

        if (response.ok) {
            const data = await response.json()
            console.log(data)
        }
    }
})