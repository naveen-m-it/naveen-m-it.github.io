import tkinter as tk
class App(tk.Tk):
    def __name__(self,*args,**kwargs):
        super().__init__(*args,**kwargs)
        self.geometry("600x500")
if __name__ == "__main__":
    app = App()
    app.mainloop()