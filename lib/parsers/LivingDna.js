module.exports = {
  matches: function(lines) {
    return lines[0].indexOf('Living DNA') !== -1;
  },
  parseLine: function(line) {
    var split = line.split('\t');
    var snp = {
      id: split[0],
      chromosome: split[1],
      genotype: split[3]
    };

    if (snp.chromosome !== 'X') {
      snp.chromosome = +snp.chromosome;
    }

    snp.genotype = snp.genotype.replace(new RegExp('-', 'g'), '?') // no-calls
    return snp;
  }
};
