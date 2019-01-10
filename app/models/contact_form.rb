class ContactForm < MailForm::Base
  attribute :name, :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message,   :validate => true
  attribute :created_at
  attribute :updated_at

  def headers
    {
      :subject => "Contact Form SweetCakes",
      :to => "frunza.sergiu3@gmail.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end
