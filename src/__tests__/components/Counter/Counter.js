import { mount } from 'enzyme'
import Counter from '../../../components/Counter'


describe('Testing Counter component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Counter />);
    })

    it('should have intial count set to 0', () => {
        expect(wrapper.text()).toMatch(/Licznik: 0+/);
    })

    it('should have counter state set to 10 when props start = 10 is given', () => {
        expect(wrapper.setProps({start: 10}).text()).toMatch(/Licznik: 10+/);
    })

    it('should have buttons of addition and substraction',() => {
        expect(wrapper.containsMatchingElement([
            <button>+</button>,
            <button>-</button>
        ])).toBe(true);
    });

    it('should increment counter after click on addition button', () => {
        const additionBtn = wrapper.find('button').at(0);
        let counter = wrapper.find('.Display');
        expect(counter.text()).toBe('Licznik: 0');
        additionBtn.simulate('click');
        counter = wrapper.find('.Display');
        expect(counter.text()).toBe('Licznik: 1');
    });

    it('should decrement counter after click on addition button', () => {
        const substractionBtn = wrapper.find('button').at(2);
        let counter = wrapper.find('.Display');
        expect(counter.text()).toBe('Licznik: 0');
        substractionBtn.simulate('click');
        counter = wrapper.find('.Display');
        expect(counter.text()).toBe('Licznik: -1');
    });

    it('should reset counter after click on reset button', () => {
        const substractionBtn = wrapper.find('button').at(2);
        const resetBtn = wrapper.find('button').at(1);
        substractionBtn.simulate('click');
        let counter = wrapper.find('.Display');
        expect(counter.text()).toBe('Licznik: -1');
        resetBtn.simulate('click');
        counter = wrapper.find('.Display');
        expect(counter.text()).toBe('Licznik: 0');
    });

    it('should have counter changed after typing new value to input and clicking on button "Zmień"', () => {
        let counter = wrapper.find('.Display');
        const input = wrapper.find('input');
        const changeButton = wrapper.find('button').at(3);
        expect(counter.text()).toBe('Licznik: 0');
        input.simulate('change', {
            target: {
                value: '8'
            }
        });
        changeButton.simulate('click');
        counter = wrapper.find('.Display');
        expect(counter.text()).toBe('Licznik: 8');
    });
})

