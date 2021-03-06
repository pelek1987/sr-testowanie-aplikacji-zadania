import TestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import Button from "../../../components/Button";

describe('<Button /> testing using snapshots', () => {
    it.skip('renders Button with label "Click me 0"', () => {
        const tree = TestRenderer
            .create(<Button label={'Click me'} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('<Button /> testing using enzyme' , () => {

    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Button />);
    })
    it.skip('should render ok', () => {
        const button = wrapper.find('button');
        expect(button.text()).toBe('OK 0');
    });

    it.skip('should render "Click me 0" when label="Click me" prop passed', () => {
        wrapper.setProps({label: 'Click me'})
        const button = wrapper.find('button');
        expect(button.text()).toBe('Click me 0');
    });

    it.skip('should have initial counter set to 0', () => {
        const counter = wrapper.find('button span');
        expect(counter.text()).toBe('0');
    })

    it.skip('should increment counter', () => {
        const button = wrapper.find('button');
        let counter = wrapper.find('button span');
        expect(counter.text()).toBe('0');
        button.simulate('click')
        counter = wrapper.find('button span');
        expect(counter.text()).toBe('1');
    });
})
