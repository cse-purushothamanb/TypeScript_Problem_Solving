type InvestmentData = {
    initialInvestment:number,
    AnnualContribution:number,
    ExpectedReturn: number,
    duration:number
    }
  
  type ResultData={
    totalAmount:number,
    totalContribution:number,
    totalInterestEarned:number
  }
  
  type Result = ResultData | string;
  
  function computeResult(data:InvestmentData):Result{
    const {initialInvestment,AnnualContribution, ExpectedReturn, duration}=data;
    if(initialInvestment<=0){
      return "Invalid Initial Investment";
    }
  
    if(duration<=0){
      return "Invalid Duration"
    }
  
    if(ExpectedReturn<0){
      return "Invalid Resturn Data"
    }
    let totalAmount = initialInvestment;
    let totalContribution=0;
    let totalInterestEarned = 0;
  
    for(let i=0; i<duration ; i++){
      totalAmount=totalAmount*(1+ExpectedReturn);
      totalInterestEarned = totalAmount-totalContribution-initialInvestment;
      totalContribution = totalContribution+AnnualContribution;
      totalAmount=totalAmount+AnnualContribution;
    }
    return{totalAmount,totalContribution,totalInterestEarned};
  }
  
  const inputData={
    initialInvestment:10000,
    AnnualContribution:2000,
    ExpectedReturn: 7,
    duration:20
  }
  console.log(computeResult(inputData))