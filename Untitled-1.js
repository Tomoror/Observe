 public class Cat
{
    public delegate void Crying（object sender，EventArgs e）；//定义一个猫叫委托
    public event Crying cry；//定义猫叫事件
    public void OnCry（EventArgs e）
    {
       if（cry！=null）
       {
           cry（this，e）；
       }
    }
   public void StartCrying()//猫叫、触发cry事件
   {
      MessageBox.Show("猫开始叫了......");
      EventArgs e=new EventArgs();
      OnCry(e);
   }
}

 
public class Mouse
{
   public delegate void Runing（Object sender，EventArgs e）；
   public evnet Running run；
   public void OnRun（EventArgs e）
   {
        if(run!=null)
          {
             run(this,e); 
          }
   }
   public Mouse(Cat c)
   {
       c.cry+=new Cat.Crying(c_Cry);//注册了猫叫事件，老鼠听到猫叫则开始逃跑
   }
   void c_Cry(object sender,EvnetArgs e)//老鼠在逃跑时又触发了人被惊醒事件
   {
       MessageBox.Show("老鼠开始逃跑了........");
       EventArgs e=new EventArgs();
       OnRun(e);
   }
}
public class Dog
{
     public Dog(Mouse m)
     {
         m.run+=new Mouse.Runing(m_run);//人注册了老鼠逃跑事件，老鼠逃跑时人被 惊醒
     }
     void m_run(object sender,EventArgs e)
         {
         MessageBox.Show("狗跑，What's wrong?");
         }
}

 
BtnTest_Click(object sender, EventArgs e)
{
    Cat c=new Cat();
    Mouse m=new Mouse(c);
    Person p=new Person(m);
    c.StartCrying();<br>}
	public interface Observer
{
     void Response();//对被观察对象的行为作出反应，这里是指猫叫
}
public interface Subject
{
     void AddObserver(Observer obj);//添加所有的观察者，在发生动作时对他们进行通知
}

 
public class Cat：Subject
{
    ArrayList arrlyList；
    public Cat（）
    {
       arrlyList=new ArrayList();
    }
    void AddObserver(Observer obj)//实现添加观察着对象的方法
    {
       arrlyList.Add(obj);
    }
    void Cry()//猫叫了，并通知所有的观察者，作出相应的反应
    {
        MessageBox.Show("猫叫了......");
        foreach(Observer obj in arrlyList)
         {
              obj.Response();
         }
    }
}

 
public class Mouse：Observer
{
    public Mouse（Cat c）//将当前的观察着对象添加到观察者集合中
    {
        c.AddObserver(this);
    }
    public void Response（）
    {
        MessageBox.show("老鼠开始逃跑了.....");
    }
}

 
public class People:Observer
{
   public People（Cat c）//将当前的观察着对象添加到观察者集合中
   {
      c.AddOberver(this);
   }
   public void Respone（）
　 {
       MessageBox.Show("狗跑，What's Wrong?");
   }
}

 
Btn_Click(Object sender,EventArgs e)
 {
Cat c=new Cat();
Mouse m=new Mouse(c);
Dog p=new Dog(c);
c.Cry();
 }