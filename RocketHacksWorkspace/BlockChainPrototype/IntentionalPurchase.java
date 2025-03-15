import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class IntentionalPurchase extends JFrame {
    private final String[] questions = {
        "Is this purchase aligned with your long-term financial goals?",
        "Have you considered cheaper alternatives?",
        "Will you still value this purchase a month from now?",
        "Is this purchase something you genuinely need rather than just want?",
        "Have you planned for this purchase in your budget?",
        "Have you waited at least 24 hours to make this decision?",
        "Will this purchase improve your quality of life in a meaningful way?",
        "Are you buying this for yourself rather than to impress others?",
        "Have you researched this purchase thoroughly?",
        "Would you still buy this if it were 20% more expensive?"
    };
    
    private int currentQuestion = 0;
    private int yesCount = 0;
    
    private JLabel questionLabel;
    private JButton yesButton;
    private JButton noButton;
    private JPanel quizPanel;
    private JPanel resultPanel;
    private JLabel resultLabel;
    private JLabel scoreLabel;
    private JButton restartButton;
    
    public IntentionalPurchase() {
        setTitle("Intentional Spending Quiz");
        setSize(550, 250);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        
        initComponents();
    }
    
    private void initComponents() {
        // Quiz panel
        quizPanel = new JPanel();
        quizPanel.setLayout(new BorderLayout(10, 20));
        
        questionLabel = new JLabel(questions[currentQuestion]);
        questionLabel.setFont(new Font("Arial", Font.BOLD, 16));
        questionLabel.setHorizontalAlignment(JLabel.CENTER);
        quizPanel.add(questionLabel, BorderLayout.CENTER);
        
        JPanel buttonPanel = new JPanel(new FlowLayout(FlowLayout.CENTER, 30, 10));
        
        yesButton = new JButton("Yes");
        yesButton.setFont(new Font("Arial", Font.PLAIN, 14));
        yesButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                yesCount++;
                nextQuestion();
            }
        });
        
        noButton = new JButton("No");
        noButton.setFont(new Font("Arial", Font.PLAIN, 14));
        noButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                nextQuestion();
            }
        });
        
        buttonPanel.add(yesButton);
        buttonPanel.add(noButton);
        quizPanel.add(buttonPanel, BorderLayout.SOUTH);
        
        // Progress indicator
        JPanel progressPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        JLabel progressLabel = new JLabel("Question " + (currentQuestion + 1) + " of " + questions.length);
        progressPanel.add(progressLabel);
        quizPanel.add(progressPanel, BorderLayout.NORTH);
        
        // Result panel
        resultPanel = new JPanel();
        resultPanel.setLayout(new BorderLayout());
        resultPanel.setVisible(false);
        
        resultLabel = new JLabel();
        resultLabel.setFont(new Font("Arial", Font.BOLD, 18));
        resultLabel.setHorizontalAlignment(JLabel.CENTER);
        
        scoreLabel = new JLabel();
        scoreLabel.setFont(new Font("Arial", Font.PLAIN, 16));
        scoreLabel.setHorizontalAlignment(JLabel.CENTER);
        
        restartButton = new JButton("Take Quiz Again");
        restartButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                resetQuiz();
            }
        });
        
        JPanel resultContent = new JPanel();
        resultContent.setLayout(new BoxLayout(resultContent, BoxLayout.Y_AXIS));
        resultContent.add(Box.createVerticalStrut(20));
        resultContent.add(resultLabel);
        resultContent.add(Box.createVerticalStrut(20));
        resultContent.add(scoreLabel);
        resultContent.add(Box.createVerticalStrut(30));
        
        JPanel restartPanel = new JPanel(new FlowLayout(FlowLayout.CENTER));
        restartPanel.add(restartButton);
        
        resultPanel.add(resultContent, BorderLayout.CENTER);
        resultPanel.add(restartPanel, BorderLayout.SOUTH);
        
        // Add panels to frame
        setLayout(new CardLayout());
        add(quizPanel, "quiz");
        add(resultPanel, "result");
    }
    
    private void nextQuestion() {
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            questionLabel.setText(questions[currentQuestion]);
            // Update progress indicator
            ((JLabel)((JPanel)quizPanel.getComponent(2)).getComponent(0)).setText("Question " + (currentQuestion + 1) + " of " + questions.length);
        } else {
            showResult();
        }
    }
    
    private void showResult() {
        boolean isIntentionalPurchase = yesCount > questions.length / 2;
        
        if (isIntentionalPurchase) {
            resultLabel.setText("This appears to be an intentional purchase!");
            resultLabel.setForeground(new Color(0, 128, 0)); // Green
        } else {
            resultLabel.setText("This might not be an intentional purchase.");
            resultLabel.setForeground(new Color(178, 34, 34)); // Red
        }
        
        scoreLabel.setText("You answered 'Yes' to " + yesCount + " out of " + questions.length + " questions.");
        
        quizPanel.setVisible(false);
        resultPanel.setVisible(true);
        
        CardLayout cl = (CardLayout) getContentPane().getLayout();
        cl.show(getContentPane(), "result");
    }
    
    private void resetQuiz() {
        currentQuestion = 0;
        yesCount = 0;
        questionLabel.setText(questions[currentQuestion]);
        ((JLabel)((JPanel)quizPanel.getComponent(2)).getComponent(0)).setText("Question " + (currentQuestion + 1) + " of " + questions.length);
        
        resultPanel.setVisible(false);
        quizPanel.setVisible(true);
        
        CardLayout cl = (CardLayout) getContentPane().getLayout();
        cl.show(getContentPane(), "quiz");
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new IntentionalPurchase().setVisible(true);
            }
        });
    }
}