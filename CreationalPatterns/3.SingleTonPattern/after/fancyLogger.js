class FancyLogger {
  constructor() {
    console.log('hei', null == undefined)
    // we are doing this null check to ensure 
    // there is only a single instance of this class
    if(FancyLogger.instance == null) {
      this.logs = []
      FancyLogger.instance = this
    }

    return FancyLogger.instance
  }

  log(message) {
    this.logs.push(message)
    console.log(`FANCY: ${message}`)
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`)
  }
}

const logger = new FancyLogger()
Object.freeze(logger)
export default logger

// export const logger2 = new FancyLogger()
