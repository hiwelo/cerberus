import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { toHaveNoViolations } from 'jest-axe';
import 'jest-styled-components';

configure({ adapter: new Adapter() });
expect.extend(toHaveNoViolations);
