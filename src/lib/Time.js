export default class Time {
  getTime(timeInMilliseconds) {
    let time = timeInMilliseconds;
    const hours = this.formatUnitOfTime(Math.floor(time/(60 * 60 * 1000)), '');
    time = time % (60 * 60 * 1000);
    const minutes = this.formatUnitOfTime(Math.floor(time / (60 * 1000)), '');
    time = time % (60 * 1000);
    const seconds = this.formatUnitOfTime(Math.floor(time/1000), '');
    const milliseconds = this.formatUnitOfTime((time % 1000), 'Y');

    return `${hours}:${minutes}:${seconds}::${milliseconds}`;
  }

  formatUnitOfTime(unitOfTime, ms) {
    let zeroes = '';

    if(ms === 'Y') {
      if(unitOfTime < 10) {
        zeroes = '00';
      }
      else if(unitOfTime < 100) {
        zeroes = '0';
      }
    }

    else if(unitOfTime < 10) {
      zeroes = '0';
    }

    return zeroes.concat(unitOfTime.toString());
  }
}