const strings = [ 'a', 'b', 'alien', 'lucy', 'anette' ];

strings.splice(3, 0, 'ariel'); // O(n/2) ~ O(n)

strings.push('amanda'); // O(1)

strings.pop(); // 0(1)

strings.unshift('lyen'); //O(n) Because the indexing is shifted

strings.shift('lyen');

strings[0]; // O(1)
