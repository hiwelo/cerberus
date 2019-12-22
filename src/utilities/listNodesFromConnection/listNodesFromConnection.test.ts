import { listNodesFromConnection } from '.';

const testNodeContent = 'test';

const testEdge = {
  node: testNodeContent,
  __typename: 'Test',
};

const testConnection = {
  edges: [testEdge],
};

describe('listNodesFromConnection', () => {
  it('should returns the test node provided through a connection object', () => {
    const result = listNodesFromConnection(testConnection);

    expect(result).toEqual([testNodeContent]);
  });
});
