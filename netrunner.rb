require 'json'

debug=ARGV[0].to_s.downcase == "true"

def get_titles(filename)
    replacements = {
        "É"=>"E",
        "Ā"=>"A",
        "Â"=>"A",
        "Ý"=>"Y",
        "™"=>"",
        "!"=>"",
        "."=>"",
        "'"=>"",
        "\""=>"",
        "-"=>""
    }
    cards=JSON.parse(File.read(filename))
    titles=cards.map do |card|
        title=card["title"]
        if title.include?(":")
            if card["side_code"]=="runner"
                title=title.split(":")[0]
            else
                title=title.split(":")[1]
            end
        end
        title.upcase()
            .split("")
            .filter { |c| c!=" "}
            .map { |c| if replacements[c] then replacements[c] else c end }
            .join("")
            .downcase()
    end

    titles.filter { |t| !t.match? /[0-9]+/ }
        .filter { |t| t != "thecatalyst" && t != "profitoverprinciple" }
end

titles = []
for i in (1...ARGV.size)
    titles = titles + get_titles(ARGV[i])
end
if debug
    titles.sort_by! { |t| t.size }
    puts titles
    puts titles.last.size
else
    titles.shuffle!
    words= "export const WORDS = [\n"
    titles.each do |t|
        words+= "  '#{t}',\n"
    end
    words+= "]\n"
    File.open("src/constants/wordlist.ts", 'w') { |file| file.write(words) }
    words= "export const VALID_GUESSES = [\n"
    titles.each do |t|
        words+= "  '#{t}',\n"
    end
    words+= "]\n"
    File.open("src/constants/validGuesses.ts", 'w') { |file| file.write(words) }
end
