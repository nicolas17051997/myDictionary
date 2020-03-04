using System;
using System.Text;
using MailKit;
using MailKit.Net.Smtp;
using MimeKit;
using System.Threading.Tasks;


namespace Dictionary.BLL.Helper
{
   public class SenderInvite
    {
        public async Task SendEmeilInviteAsync(string email, string subject, string massege)
        {
            var emailMessage = new MimeMessage();
            emailMessage.From.Add(new MailboxAddress("File_Sharing", "filesharingimgs.com@gmail.com"));
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = "Your link for register:"
            };
            using (var client = new SmtpClient())
            {
                await client.ConnectAsync("smtp.gmail.com", 587, MailKit.Security.SecureSocketOptions.StartTls);
                await client.AuthenticateAsync("filesharingimgs.com@gmail.com", "N16012020");
                await client.SendAsync(emailMessage);
                await client.DisconnectAsync(true);
            }
        }
    }
}
