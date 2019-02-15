package lecture

object Thawsif {
    def computeShippingCost(input:Double): Double = {
      if (input <= 30.0){
        return 50.0
      }
      5+100*(input - 30.0)
    }

    def main(args: Array[String]): Unit = {
      val YEO: Double = computeShippingCost(30.0)
      println(YEO)
    }
}
