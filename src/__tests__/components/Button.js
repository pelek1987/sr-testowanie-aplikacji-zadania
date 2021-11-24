import TestRenderer from 'react-test-renderer';
import Button from "../../components/Button";

describe('<Button /> testing using snapshots', () => {
    it('renders Button with label "Click me 0"', () => {
        const tree = TestRenderer
            .create(<Button label={'Click me'} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('' , () => {})
