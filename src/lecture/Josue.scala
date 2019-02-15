package lecture

object Josue {
  def computeShippingCost(input:Double): Double = {
    if (input <= 30.0){
      return 5.0
    }
    5+.25*(input - 30.0)
  }

  def main(args: Array[String]): Unit = {
    val x: Double = computeShippingCost(35.0)
    println(x)
  }

}
